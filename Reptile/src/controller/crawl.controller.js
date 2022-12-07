const puppeteer=require('puppeteer')
const fs = require("fs");
const crawlService=require('../service/crawl.service')
let data=[];
const {CrawInfo} = require('../model/dbmodel')


exports.crawlInfo=function (req,res,next) {
    const startYear=req.body.startYear
    const stopYear=req.body.stopYear
    const startMonth= req.body.startMonth
    const stopMonth=req.body.stopMonth
    const startPage=req.body.startPage
    const stopPage=req.body.stopPage

    console.log(startYear,stopYear);

    (async ()=>{
        const browser=await puppeteer.launch({
            headless:true,
            userDataDir:'./data',
            args:['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page=await browser.newPage()

        for(let mo=startMonth;mo<=stopMonth;mo++){
            for(let pg=startPage;pg<=stopPage;pg++){
                mo=mo.toString().padStart(2,"0")
                await page.goto(
                    'https://www.bilibili.com/v/kichiku/guide/#/all/click/0/' +
                    `${pg}` +
                    '/' +
                    `${startYear}-${mo}-01,${startYear}-${mo}-28`
                );
                await page.waitForSelector('#videolist_box > div.vd-list-cnt > ul > li > div > div.r');

                let infoLists=
                    await page.$$eval('#videolist_box > div.vd-list-cnt > ul > li > div > div.r',
                    (links)=>
                        links.map((x)=> {
                            let tmp=x.outerText.split('\n')

                            // crawlService.saveInfo(tmp)
                            let saveData = {
                                title: tmp[0],
                                introduce: tmp[1],
                                viewer: tmp[2],
                                comment: tmp[3],
                                up:tmp[4]
                            }
                            // let msg = new CrawInfo(saveData)
                           /* msg.save(function (err, result) {
                                if (err) {
                                    console.log('消息储存错误')
                                } else {
                                    console.log('消息储存成功')
                                }
                            })*/
                            return saveData

                            // console.log(x.outerText)
                            // return x.innerHTML
                        }));
                data.push(infoLists)
            }
        }
        /*fs.writeFile('data.json',JSON.stringify(data,null,'\t'),function (err) {
            if(err){
                console.log(err);
            }
        })*/
        data.forEach(f=>{
            f.forEach(e=>{
                console.log('存储的一条数据',e)
                crawlService.saveInfo(e)
            })
        })
    })();
    res.status(200).json({
        data:'开始执行爬虫'
    })
}

exports.removeAll=function (req,res,next) {
    crawlService.removeAll(res);
    /* res.status(200).json({
        data:'数据删除成功'
    }); */
}