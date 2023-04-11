import axios from "axios"

const uploadImage = async (file) => {

    if(!file) return
    try {
        
        const formdata = new FormData()
        formdata.append('upload_preset','curso-vue')
        formdata.append('file', file)

        const url = 'https://api.cloudinary.com/v1_1/dfxnfluly/image/upload'
        const {data} = await axios.post(url, formdata)
        console.log(data)

        return data.secure_url

    } catch (error) {
        console.error('Error al cargar imagen')
        console.log(error)
        return null
    }
}

export default uploadImage