import Product from '../models/products.model.js'

const productDAO={
}

productDAO.getAll=async()=>{
    const products=await Product.find();
    return products;
};
productDAO.getOne=async(barcode)=>{
    const product=await Product.findOne({barcode:barcode});
    return product;
}

productDAO.insertOne=async(product)=>{
    return await Product.create(product);
}

productDAO.deleteOne=async(barcode)=>{
    const product=await Product.findOne({barcode:barcode});
    return product;
}

productDAO.deleteOne = async (barcode) => {
    try {
        const result = await Product.deleteOne({ barcode: barcode });
        if(barcode)
        // Producto eliminado con éxito
        return { message: 'Product deleted successfully' };
    } catch (error) {
        return { error: error.message };
    }
};

productDAO.updateOne=async(barcode, product)=>{
    return await Product.findOneAndUpdate({barcode:barcode},product); 
};

export default productDAO;