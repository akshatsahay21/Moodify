const Imagekit = require("@imagekit/nodejs");

const client = new Imagekit ({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,

})

async function uploadFile({ buffer, filename, folder = ""}) {

const file = await client.files.upload({
    file: await Imagekit.toFile(Buffer.from(buffer)),
    fileName: filename,
    folder
})
return file;

}
module.exports = {
    uploadFile
}