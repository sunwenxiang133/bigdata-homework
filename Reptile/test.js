/*
const puppeteer = require("puppeteer");
let data=[];
const fs=require('fs');



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
            await page.waitForSelector('.vd-list-cnt > ul > li > div > div.r > a');

            let titles=await page.$$eval('.vd-list-cnt > ul > li > div > div.r > a',
                (links)=>
                    links.map((x)=> x.innerHTML));
            data=data.concat(titles)
        }
    }

    fs.writeFile('data.json',JSON.stringify(data,null,'\t'),function (err) {
        if(err){
            console.log(err);
        }
    })
})();*/
