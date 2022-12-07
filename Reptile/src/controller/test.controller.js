const puppeteer=require('puppeteer')
const fs = require("fs");
const testService=require('../service/test.service')
let data=[];
const {CrawInfo} = require('../model/dbmodel')


exports.crawlInfo=function (req,res,next) {
    (async ()=>{
        const browser=await puppeteer.launch({
            headless:false,
            userDataDir:'./data'
        });
        const page=await browser.newPage()

        for(let mo=1;mo<12;mo++){
            for(let pg=1;pg<=10;pg++){
                mo=mo.toString().padStart(2,"0")
                await page.goto(
                    'https://www.bilibili.com/v/kichiku/guide/#/all/click/0/' +
                    `${pg}` +
                    '/' +
                    `2021-${mo}-01,2021-${mo}-28`
                );
                await page.waitForSelector('#videolist_box > div.vd-list-cnt > ul > li > div > div.r');

                let infoLists=
                    await page.$$eval('#videolist_box > div.vd-list-cnt > ul > li > div > div.r',
                    (links)=>
                        links.map((x)=> {
                            let tmp=x.outerText.split('\n')

                            // testService.saveInfo(tmp)
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
                testService.saveInfo(e)
            })
        })
    })();
    res.status(200).json({
        data:'开始执行爬虫'
    })
}