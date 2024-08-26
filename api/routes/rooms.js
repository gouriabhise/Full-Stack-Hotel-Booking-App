import express from "express"
import Room from "../models/Room.js"
import { createError } from "../utils/error.js"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js"
import { verifyAdmin } from "../utils/verifyToken.js"
const router=express.Router()

 router.post("/:hotelid",verifyAdmin,createRoom)
 //update
 router.put("/:id",verifyAdmin,updateRoom)

//delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom)
 //get Room by id
  
router.get("/:id",getRoom)
 //get all Rooms
 
router.get("/",getRooms)
export default router