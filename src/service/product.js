import { http } from './config'

export default {
    read: () => {
        return http.get('product/read.php')
    },
    save: (product) => {
        return http.post('product/create.php', product)
    },
    update: (product) => {
        return http.put('product/update.php', product)
    },
    delete: (productId) => {
        return http.post('product/delete.php', { id: productId })
    }
}