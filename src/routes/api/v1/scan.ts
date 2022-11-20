import { Router } from "express"
import { getAllFolders } from "../../../services/gdService"

const router = Router()

router.use('/',async (req,res)=>{
   let folders =  await getAllFolders('1l-zx6XFLtugKI0dNkOA6zztHOsDOShko')
   console.log(folders)
})


export default router