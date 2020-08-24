const space = 'leqwowjh1stb';
const environment = 'master';
const accessToken = '3kSoLmqa4btllJIWORmJTrOOu5nmAM6bb_JBTuSPuWI'

const getProjects = async () => {
    const res = await fetch(`https://cdn.contentful.com/spaces/${space}/environments/${environment}/entries?access_token=${accessToken}`, { method: 'GET' })
    const data = await res.json()
    return data;
}

const getAssetURL = (assetId, data) => {
    console.log(assetId, data)
    const selectedAsset = data.includes.Asset.filter(asset => {
        return asset.sys.id === assetId
    })
    console.log('https:' + selectedAsset[0].fields.file.url)
    return 'https:' + selectedAsset[0].fields.file.url
}

const createTags = (entry) => {
    const tagshtml = entry.fields.tags.map(tag => {
        return (`<p class="${tag.toLowerCase()}tag tag">${tag}</p>`)
    }).join('')
    return tagshtml;
}