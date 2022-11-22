import { google } from "googleapis"
import { createQuery } from "../utils/gdriveUtils"
import { ItemDrive } from "../models/data/itemDrive"
import { oauth2Client } from "../routes/oauth2/oauth2"
import  DriveContentType  from "../models/enum/driveContentType"

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
})

let allItems: ItemDrive[] = new Array()

export const getAllItems = async (ids: ItemDrive[], type:DriveContentType) => {
  let res
  let pageToken = ""
  let subFolders: ItemDrive[] = new Array()

  do {
    res = await drive.files.list({
      q: createQuery(ids, type),
      fields: "nextPageToken, files(id, name)",
      includeItemsFromAllDrives: true,
      supportsAllDrives: true,
      includeTeamDriveItems: true,
      pageToken,
    })
    pageToken = res.data.nextPageToken
    const jsonFolders = JSON.stringify(res.data.files)
    const foldersIteration = JSON.parse(jsonFolders) as ItemDrive[]
    allItems = allItems.concat(foldersIteration)

    console.log()

    if (type == DriveContentType.FOLDER) subFolders = subFolders.concat(foldersIteration)

  } while (res.data.nextPageToken != null)

 /* if(subFolders.length != 0) {

    let iterations:number = Math.floor(subFolders.length/21)*21
    console.log("ITERATIONS:"+iterations)

    for(let i=0;i!=iterations;i++){
      
      if(i == 21){
        let items = subFolders.splice(i)
        await getAllItems(items,DriveContentType.FOLDER)
        i = 0
        iterations -=21
      }
    }
    if(subFolders.length > 0){
      await getAllItems(subFolders,DriveContentType.FOLDER)
    }

  }
  */

  return allItems
}
