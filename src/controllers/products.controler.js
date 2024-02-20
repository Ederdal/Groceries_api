import productDAO from "../dao/products.dao.js";

export const getAll = (req, res) => {
  productDAO.getAll()
    .then(products => {
      res.render('../src/views/index', { products });
    })
    .catch(err => res.json({
      status: "Server unavailable",
      error: err
    }));
};
export const getOne = (req, res) => {
  productDAO.getOne(req.params.barcode)
    .then(product => {
      !product ? res.json({
        message: "product not fund :/"
      }) : res.render('../src/views/edit',{product});
    })
    .catch(err => res.json({
      status: "Server unavailable",
      error: err
    }));
};
export const insertOne = (req, res) => {
  productDAO.insertOne(req.body)
    .then(result => {
      console.log("producto guardado");
      res.redirect('/');
    })
    .catch(err => res.json({
      status: "Server unavailable",
      error: err
    }));
};

export const deleteOne = (req, res) => {
  productDAO.deleteOne(req.params.barcode)
    .then(result => {
      if (!result) {
        return res.status(404).json({
          message: "Product not found :/"
        });
      }
      res.redirect('/');
    })
    .catch(err => { 
      console.error(err);
      res.status(500).json({ 
        status: "Server unavailable", 
        error: err 
      }); 
    });
};


export const updateOne = (req, res) => {
  productDAO
    .updateOne(req.params.barcode, req.body)
    .then((product) => {
      !product
        ? res.json({
            message: "Product not found",
          })
        : res.json({ status: 'Success' });
    })
    .catch((err) => res.json({ status: "Server Unavailable" }));
};







