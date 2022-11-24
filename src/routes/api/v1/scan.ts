import { Router } from "express"
import { ItemDrive } from "../../../models/data/itemDrive"
import DriveContentType from "../../../models/enum/driveContentType"
import { getAllItems } from "../../../services/gdService"

const router = Router()

router.use('/',async (req,res)=>{
   const folders =  await getAllItems('1l-zx6XFLtugKI0dNkOA6zztHOsDOShko',DriveContentType.FOLDER)
   let files:ItemDrive[] = new Array()

   for(let folder of folders){
   let filesFolder = await getAllItems(folder.id,DriveContentType.FILE)
   files = files.concat(filesFolder)
   }

   
   
   
   res.sendStatus(200)  
})


export default router