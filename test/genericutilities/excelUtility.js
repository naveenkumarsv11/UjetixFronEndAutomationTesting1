import * as fs from "fs";
import {readFile,set_fs} from "xlsx"
set_fs(fs)

class ExcelUtility{
    static path = "test/test_data/data.numbers"
    readExcelData(SheetName){
        let workbook = readFile(ExcelUtility.path)
        let dataSet = workbook.Sheets[SheetName]
        console.log(dataSet);
        let map = new Map()
        let key,value;
        for(let data in dataSet){
            if(data.includes('A'))
                key = dataSet[data]['v']
            if(data.includes('B'))
                value = dataSet[data]['v']
            if(key != undefined)
                map.set(key,value)
        }
        return map;
    }
}
export default new ExcelUtility()
