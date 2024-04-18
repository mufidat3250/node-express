const Products = require('../models/product')

const getAllProduct = async(request, response, next) => {
    // const {featured, company, sort, fields, numericFilters} = request.query
    // const queryObject = {}
    // if(featured){
    //     queryObject.featured = featured === 'true' ? true : false
    // }
    // if(company){
    //     queryObject.company = company
    // }

    // let result =  Products.find(queryObject)
    // if(sort){
    //     const sortList = sort.split(',').join(' ')
    //     result = result.sort(sortList)
    // }else{
    //     result  = result.sort('createdAt')
    // }
    // if(fields){
    //     const fieldList = fields.split(',').join(' ')
    //     result = result.select(fieldList)
    // }
    // if(numericFilters){
    //     const operatorMap = {
    //         ">" : "$gt",
    //         ">=": "$gte",
    //         "<" : "$lt",
    //         "<=": "$lte",
    //         "=" : "eq"
    //     }
    //     const regex = /\b(>|>=|<|<=|=)\b/g
    //     let filter = numericFilters.replace(regex, (match)=>`-${operatorMap[match]}-`)
    //     const options = ['price', 'rating']
    //     filter = filter.split(',').forEach((item)=> {
    //         const [field, operator, value] = item.split('-')
    //         if(options.includes(field)){
    //             queryObject[field] = {[operator]:Number(value)}
    //         }
    //     })
    // }
    // result = Products.find(queryObject)

    // const page = Number(request.query.page) || 1
    // const limit = Number(request.query.limit) || 7
    // const skip = (page - 1) * limit

    // result = result.skip(skip).limit(limit)
    // const products = await result

    // response.status(200).json({data: products})
}
const getAllProductStatic = async(request, response, next) => {
    console.log(request.query)
    const { price, fields , sort, numericFilters} = request.query
    let queryObject = {}
    let result = Products.find(queryObject)
    if(price){
        queryObject.price = price
        result = result.find(queryObject)
    }
    if(fields){
        const fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }
    if(sort){
        const sortList = sort?.split(',').join(' ')
        result = result.sort(sortList)
    }

    if(numericFilters){
        const operatorMap = {
            ">":"$gt",
            ">=":"gte",
            "=":"eq",
            "<=":"lte",
            "<":"lt"
        }
        const regEx = /\b(<|<=|>|>=|=)\b/g
        const options = ['price', 'rating'] 
        let filter = numericFilters.replace(regEx, (match)=>`-${operatorMap[match]}-`)
        filter = filter.split(',').forEach(item => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)){
                queryObject[field]= {[operator]: value}
            }
        });
    }
    const page = Number(request.params.page)
    const limit = Number(request.params.limit)
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)
        const products = await result
        response.status(200).json({data:products})
}

module.exports = {
    getAllProduct,
    getAllProductStatic
}