import { Database } from "@tableland/sdk";
import { ethers } from "ethers";
export const XFundTable ="xfund_80001_8406"
const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY)
const provider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/polygon_mumbai"
  );

const signer = wallet.connect(provider);

const db = new Database({signer})  


//Query XFund
//Insert XFund

export const queryXFund = async(id:string)=>{
    try {
    const { results } = await db.prepare(`SELECT * FROM ${XFundTable} where id=${id} ;`).all();

   return results;
}
catch(error:any)
{
    return []
}

}


export const insertXFund = async(id:number,owner:string,name:string,frequency:number,startdate:number,image:string,amount:number,cycletcount:number,participants:string)=>{
    const { meta: insert } = await db
    .prepare(`INSERT INTO ${XFundTable} ( id,owner,name,frequency,startdate,image,amount,cyclecount,participants) VALUES ( ?,?,?,?,?,?,?,?,?);`)
    .bind(id,owner,name,frequency,startdate,image,amount,cycletcount,participants)
    .run();

    // Wait for transaction finality
    //await insert.txn?.wait();
}