import { Router } from 'express';
import {
  createPackage,
  getPackage,
  updatePackage,
  deletePackage
} from '../controller/index.js';
import validateJwt from "../../../middleware/validate-jwt.js";
const router = Router();

router.post('/',validateJwt, createPackage);
router.get('/:id',validateJwt, getPackage);
router.put('/:id',validateJwt, updatePackage);
router.delete('/:id',validateJwt, deletePackage);

export default router;
