import React from 'react'
import { BASE_IMG_THUMB_URL_BIG } from '../../config/apiConfig'
import { Link } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { bounceTransition } from './FramerCard';

interface BaseCardProps {
    title:String,
    description:String,
    image:String,
    chimp:String,
    link:String,
    id:String
}

function BaseCard(props: BaseCardProps) {

    return (
        <Link to={`${props.link}`}>
        <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5,bounce:0.5,ease: "easeOut"}}     
        animate={{
            y: ["10%", "-10%"],
          }}   
        className={`rounded-xl shadow-md m-4 lg:w-96 md:w-5/6 sm:w-fit hover:-hue-rotate-30 transition-shadow duration-300  hover:shadow-2xl ${useColorModeValue('','hover:shadow-orange-300')} `}>
          <div className="flex align-middle">
            <div className="flex-grow-2 align-middle flex">
              <img
                className="w-80 rounded-lg self-center"
                src={props.image.toString()}
                alt={props.title.toString()}
              />
            </div>
            <div className="px-4 py-3">
              <div className={`uppercase tracking-wide text-sm ${useColorModeValue('text-indigo-500 ','text-indigo-200 ')} font-semibold`}>
                {props.chimp}
              </div>
              <span
                className="block mt-1 text-md leading-tight font-bold"
              >
                {props.title}
              </span>
              <p className={`mt-1 font-medium text-sm ${useColorModeValue('text-slate-800','text-slate-300')}`}>
                {props.description.substring(0, 100)}....
              </p>
            </div>
          </div>
        </motion.div>
      </Link>
    )
}

export default BaseCard
