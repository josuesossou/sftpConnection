let Client = require('ssh2-sftp-client');
let sftp = new Client();
let fileLists = [];

const s = async () => {
    await sftp.connect({
        host: '127.0.0.1',
        port: '22',
        username: 'username',
        password: '******'
    })
    
    const listOfFiles = await sftp.list('/')
    
    console.log(listOfFiles)
    
    listOfFiles.forEach(async (file) => {
        const files = await sftp.list(`/${file.filename}/incoming`)
    
        fileLists = [ ...fileLists, ...files ]
    })
    
    console.log(fileLists)
    
    sftp.end()
}

s()