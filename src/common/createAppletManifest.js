const fs = require('fs')
const path = require('path')


let base = path.join('./_dist_', 'apps')

const createAppletManifest = () => {

// Generate Applet Manifest
let appletDict = {}
let appletDir = path.join(__dirname,'..','apps')
let categories = fs.readdirSync(appletDir)

// Fetch external files
let external = fs.readFileSync(path.join(appletDir,'external.js'))
let decoded = eval(external.toString('utf-8'))

decoded.forEach(info => {

  if (!('categories' in info)) info.categories = []
  let found = info.categories.find(c => c === 'External')
  if (!found) info.categories.push("External")

  appletDict[info.name] = info
})


categories = categories.filter(c => ((fs.existsSync(path.join(appletDir,c)) && fs.lstatSync(path.join(appletDir,c)).isDirectory())))

categories.forEach((category,indOut) => {
  let categoryDir = path.join(appletDir,category)
  let files = fs.readdirSync(categoryDir)
  files = files.filter(f => (fs.existsSync(path.join(categoryDir,f)) && fs.lstatSync(path.join(categoryDir,f)).isDirectory()))

  var bar = new Promise((resolve, reject) => {
    files.forEach((file,indIn) => {
      let dir = path.join(appletDir,category,file)
      let settingsFile = path.join(dir,'settings.js')
      if(fs.existsSync(settingsFile)){
        let data = fs.readFileSync(settingsFile)
        let decoded = data.toString('utf-8')

        // console.log(__dirname)
        // console.log(decoded)

        let dict = {}

        // Strings
        let keywords = ['name', 'author', 'description']
        keywords.forEach(k => {
          let regex = new RegExp(`['"]?${k}['"]?:\s*([^\{\,]+)`, 'g')
          let match = regex.exec(decoded)
          try {
            dict[k] = (match == null) ? undefined : eval(`${match[1]}`)  
          } catch (e) {}
        })

        // Booleans
        let boolwords = ['graphs?', 'canTrain']
        boolwords.forEach(k => {
        let regexgraphs = new RegExp(`['"]?${k}['"]?:\s*`, 'g')
        let match = regexgraphs.exec(decoded)
        try {
          dict[k.replace('?','')] = (match == null) ? undefined : true
        } catch (e) {}

        })
          let eventreg1 =  /class:\s*['"]Event['"]/g;
          match = eventreg1.exec(decoded);
          dict.controls = (match == null) ? undefined : true

          let imagereg1 =  /from ['"](.+.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF))['"]/g;
          match = imagereg1.exec(decoded);
          dict.image = (match == null) ? undefined : path.join(base, category, file, match[1])

          let displayreg1 =  /['"]?display['"]?:\s*({[^\}]+})/g;
          match = displayreg1.exec(decoded);
          try {
            dict.display = (match == null) ? undefined : eval(`(${match[1]})`) 
          } catch (e) {}

          let name = dict.name
          appletDict[name] = dict
          appletDict[name].folderUrl = '/_dist_/' + dir.split(path.join(__dirname,'/../'))[1] // absolute to served site

          let devicereg =  /['"]?devices['"]?:\s*([^\{\]]+)]/g;
          match = devicereg.exec(decoded);
          appletDict[name].devices = (match == null) ? undefined : eval(match[1] + ']')
          
          let categoryreg =  /['"]?categories['"]?:\s*([^\{\]]+)]/g;
          match = categoryreg.exec(decoded);
          appletDict[name].categories = (match == null) ? undefined : eval(match[1] + ']')
      }
      if (indIn === files.length-1) resolve()
      });
  })
  bar.then(() => {
    if (indOut === categories.length-1){
    for(const prop in appletDict){
      if (appletDict[prop]['folderUrl']) appletDict[prop]['folderUrl'] = appletDict[prop]['folderUrl'].replace(/\\/g,'/');
    }
    fs.writeFile('./src/apps/apps.js', 'export const appletManifest = ' + JSON.stringify(appletDict), err => {
      if (err) {
        console.error(err)
        return
      }
      console.log('Applet manifest written.');
    })
  }
  })
})
}


module.exports = createAppletManifest