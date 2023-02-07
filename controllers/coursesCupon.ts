import { Articles } from "../models/articles";
import { Category } from "../models/category";
import { Courses } from "../models/courses";
import { excecuteQuery } from "../models/viewCourses";


const getCoursesCoupons = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const count = `SELECT COUNT(*) as count FROM courses`;
    const queryDataCourses = `SELECT courses.*, categories.categoria, subcategories.subcategoria FROM courses INNER join categories on courses.categories_id=categories.id INNER join subcategories ON courses.subcategories_id=subcategories.id where precio_oferta=0 order by fecha DESC LIMIT ${limit} OFFSET ${offset}`;
        try {
            const coursesCuponData = await excecuteQuery(queryDataCourses,null);
            const coursesCountData = await excecuteQuery(count,null);
            res.send({coursesCountData,coursesCuponData}) as Courses[];
        } catch (error) {
            res.status(500).send(error);
        }
}

const getCoursesByRuta = async (req, res) => {
    const ruta = req.query.ruta;
    const queryDatabyRoute=`SELECT courses.*, categories.categoria, subcategories.subcategoria 
    FROM courses INNER join categories on courses.categories_id=categories.id 
    INNER join subcategories ON courses.subcategories_id=subcategories.id 
    where courses.ruta ='${ruta}'`;
    const queryDataRelated =`SELECT * FROM courses WHERE categories_id=(SELECT categories_id FROM courses WHERE ruta='${ruta}') LIMIT 3`;
    try {
       const CoursesDataByRuta = await excecuteQuery(queryDatabyRoute,null);
       const CoursesDataByRelate = await excecuteQuery(queryDataRelated,null);
        res.status(200).json(CoursesDataByRuta,CoursesDataByRelate) as Courses[];
   
    } catch (error) {
        res.status(500).send(error);
    }
}
const getCoursesCouponsByLanguage = async (req, res) => {

    const idioma = req.query.idioma || 'Spanish';
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const count = `SELECT COUNT(*) as count FROM courses where idioma='${idioma}'`;
    const queryDataCourses = `SELECT courses.*, categories.categoria, subcategories.subcategoria FROM courses INNER join categories on courses.categories_id=categories.id INNER join subcategories ON courses.subcategories_id=subcategories.id where idioma='${idioma}' and precio_oferta=0 order by fecha DESC LIMIT ${limit} OFFSET ${offset}`;
        try {
            const coursesByLanguegeCupon = await excecuteQuery(queryDataCourses,null);
            const coursesByLanguegeCount = await excecuteQuery(count,null);
            res.send({coursesByLanguegeCount,coursesByLanguegeCupon}) as Courses[];
        } catch (error) {
            res.status(500).send(error);
        }
};

const getCoursesOutstanding = async (req, res) => {
    const queryDataOutstandding = `SELECT * FROM courses ORDER BY fecha AND visitas desc LIMIT 13`;
    try {
        const CoursesDataOutstandding = await excecuteQuery(queryDataOutstandding,{});
        res.status(200).send(CoursesDataOutstandding) as Courses[];
    } catch (error) {
        res.status(500).send(error);
    }
}
const getCoursesRelated = async (req, res) => {
    const routes = req.query.ruta;
    const queryDataRelated =`SELECT * FROM courses WHERE categories_id=(SELECT categories_id FROM courses WHERE ruta='${routes}') LIMIT 3`;
    try {
        const CoursesDataRelated = await excecuteQuery(queryDataRelated,null);
        res.status(200).send(CoursesDataRelated) as Courses[];
    } catch (error) {
        res.status(500).send(error);
    }
}

const getCoursesItoo = async (req, res) => {

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const queryDataCourses = `SELECT courses.*, categories.categoria, subcategories.subcategoria FROM courses INNER join categories on courses.categories_id=categories.id INNER join subcategories ON courses.subcategories_id=subcategories.id where plataforma="Itoo" order by fecha DESC LIMIT ${limit} OFFSET ${offset}`;
        try {
            const coursescuponData = await excecuteQuery(queryDataCourses,null);
            res.send(coursescuponData) as Courses[];
        } catch (error) {
            res.status(500).send(error);
        }
};

const getCategories = async (req, res) => {
    const querycategories = 'Select * from categories';
    try {
        const queryDataCateg = await excecuteQuery(querycategories,null);
       res.status(200).send(queryDataCateg);
    } catch (error) {
       res.status(500).send(error);
    }
}
const getCategoriesByRoute = async (req, res) => {
    const ruta = req.query.ruta;
    const querycategorybyroute = `Select * from categories where ruta='${ruta}'`;
    try {
        const queryDataCategByRoute = await excecuteQuery(querycategorybyroute,null);
        res.send(queryDataCategByRoute);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getSubCategories =  async (req, res) => {
    const categories_id = req.query.id_category ? parseInt(req.query.id_category) : 1;
    try {
        const queryDataCateg = await excecuteQuery(`select * from subcategories where categories_id = ${categories_id}`,null);
        res.send(queryDataCateg) as Category[];
    } catch (error) {
        res.status(500).send(error);
    }
}

const getLanguage = async (req, res) => {
    try {
        const queryDatalanguage = await excecuteQuery('Select * from languages',null);
        res.json(queryDatalanguage);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getCoursesDiscounts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const count = `SELECT COUNT(*) as count FROM courses where finOferta > SYSDATE() AND precio_oferta > 0 AND calificacion >= 4.5`;
    const queryDataDiscount=`SELECT * FROM courses where finOferta > SYSDATE() AND precio_oferta > 0 AND calificacion >= 4.5 order by calificacion desc LIMIT ${limit} OFFSET ${offset}`;
    try {
       const CoursesDataDiscount = await excecuteQuery(queryDataDiscount,null);
       const coursesCountDataDiscont = await excecuteQuery(count,null);
        res.status(200).json({coursesCountDataDiscont,CoursesDataDiscount}) as Courses[];
   
    } catch (error) {
        res.status(500).send(error);
    }
}

const getCoursesDiscountSearch = async (req, res) => {
    const tag = req.query.tag || 'React';
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const count = `SELECT COUNT(*) as count FROM courses where tag= '${tag}' AND finOferta > SYSDATE() AND precio_oferta > 0 AND calificacion >= 4.5`;
    const queryDataDiscount=`SELECT * FROM courses where tag='${tag}' AND finOferta > SYSDATE() AND precio_oferta > 0 AND calificacion >= 4.5 order by calificacion desc LIMIT ${limit} OFFSET ${offset}`;
    try {
       const CoursesDataDiscount = await excecuteQuery(queryDataDiscount,null);
       const coursesCountDataDiscontSearch = await excecuteQuery(count,null);
        res.status(200).json({coursesCountDataDiscontSearch,CoursesDataDiscount}) as Courses[];
   
    } catch (error) {
        res.status(500).send(error);
    }
}
const getPosts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const count = `SELECT COUNT(*) as count FROM articles`;
    const queryDataPosts=`SELECT * FROM articles order by visitas desc LIMIT ${limit} OFFSET ${offset}`;
    try {
       const PostsData = await excecuteQuery(queryDataPosts,null);
       const postsCountData = await excecuteQuery(count,null);
        res.status(200).json({postsCountData,PostsData}) as Articles[];
   
    } catch (error) {
        res.status(500).send(error);
    }
}
const getPostsByRuta = async (req, res) => {
    const ruta = req.query.ruta;
    const queryDataPosts =`SELECT * FROM articles WHERE ruta='${ruta}'`;
    try {
       const PostsDataByRuta = await excecuteQuery(queryDataPosts,null);
        res.status(200).json(PostsDataByRuta) as Articles[];
    } catch (error) {
        res.status(500).send(error);
    }
}

export { getCoursesCoupons,getCoursesByRuta,getCoursesOutstanding,
    getCoursesRelated,getCoursesItoo,getCategories,getSubCategories,
    getCategoriesByRoute,getLanguage,getCoursesCouponsByLanguage,getCoursesDiscounts,getCoursesDiscountSearch,getPosts,getPostsByRuta }