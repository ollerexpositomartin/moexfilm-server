import { google } from "googleapis"
import { ItemDrive } from "../models/itemDrive"
import {oauth2Client} from "../routes/oauth2/oauth2"


const drive = google.drive({
    version:'v3',
    auth:oauth2Client
})

let allFolders:ItemDrive[] = new Array()

export const getAllFolders = async(id:string) =>{
    let res
    let pageToken = ''
    let subFolders:ItemDrive[] = new Array()

    do{
     res = await drive.files.list({
        q: `\'${id}\' in parents and mimeType = \'application/vnd.google-apps.folder\'`,
        fields:'nextPageToken, files(id, name)',
        includeItemsFromAllDrives:true,
        supportsAllDrives:true,
        includeTeamDriveItems:true,
        pageToken
    })

    pageToken = res.data.nextPageToken
    const jsonFolders = JSON.stringify(res.data.files)
    const foldersIteration = JSON.parse(jsonFolders) as ItemDrive[]
    allFolders = allFolders.concat(foldersIteration)
    subFolders = subFolders.concat(foldersIteration)
    
    } while(res.data.nextPageToken!=null)

    for(const folder of subFolders){
       await getAllFolders(folder.id)
    }
    return allFolders
}

const getAllFiles = async(id:string) =>{

}