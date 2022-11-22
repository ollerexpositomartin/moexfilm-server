import { Router } from "express"
import DriveContentType from "../../../models/enum/driveContentType"
import { getAllItems } from "../../../services/gdService"

const router = Router()

router.use('/',async (req,res)=>{
   const folders =  await getAllItems([{id:'1l-zx6XFLtugKI0dNkOA6zztHOsDOShko',name:''}],DriveContentType.FOLDER)
  console.log(folders)

})


export default router