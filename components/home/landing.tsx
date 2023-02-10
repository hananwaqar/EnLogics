/* eslint-disable */
import { Button, HeaderSmall } from '@shared-components';
import { FC, Fragment } from 'react';
import { motion } from 'framer-motion';
import { BiChevronsDown } from 'react-icons/bi';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { PersonalDetailsContext } from 'shared/utils/contexts';
import { PersonalDetails } from 'shared/utils/types';
import { characters } from 'shared/components/constants';
import Canvas from './Canvas';

export default function Landing(): JSX.Element {
  const config = {
    type: 'spring',
    damping: 10,
    stiffness: 80
  };
  const personalDetails: PersonalDetails = useContext(PersonalDetailsContext);
  const router = useRouter();
  return (
    <>
      {/* <img
        src="/images/vectors/ellipse.svg"
        alt="Ellipse Vector"
        className="absolute right-0 bottom-0 w-2/3 md:w-50p lg:w-35p pointer-events-none"
      />
      <img
        src="/images/vectors/triangle.svg"
        alt="Triangle 3d Vector"
        className="block md:hidden absolute right-1/3 top-28 w-1/4 md:w-16 animate-spin pointer-events-none"
      /> */}
      {/* <motion.div
        transition={config}
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
        exit={{ x: 0, opacity: 0 }}> */}
      <div>
        {/* <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center items-center">
          
            <div className="items-center w-3/4 -mt-10 relative">
              <img
                src="/images/vectors/triangle.svg"
                alt="Triangle 3d Vector"
                className="hidden md:block absolute right-0 top-0 w-2/3 md:w-16 animate-spin"
              />
              <HeaderSmall text="Who is he?" />
              <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3">
                {personalDetails.name}
              </h1>
              <h5 className="text-7xl font-light text-violet text-justify">
                {personalDetails.about}
              </h5>
              <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="solid"
                    text="Know More"
                    onClickHandler={() => router.push('#skills')}
                  />
                </div>
                <div className="sm:col-span-1 xl:col-span-1">
                  <Button
                    type="outlined"
                    text="Download Resume"
                    // eslint-disable-next-line no-return-assign
                    onClickHandler={() => window.open(personalDetails.resume, '_blank')}
                  />
                </div>
              </div>
            </div>
          </div> */}
        <div className="relative h-screen flex justify-center items-center flex-col gap-5">
          <Canvas />

          {/* <svg
      width="203" height="190"
        className="h-[10vw] max-h-[100px] min-h-[60px] max-w-[100vw] z-[1]"
        viewBox="0 0 276 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {characters.map((character, index) => (
          <Fragment key={character}>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: index / 10, duration: 1 }}
              d={character}
              fill="none"
              stroke="#FFF"
              strokeWidth="3"
            ></motion.path>
            <motion.path
              initial={{ fill: "#ffffff00" }}
              animate={{ fill: "#ffffff" }}
              transition={{ delay: 0.7 + index / 10, duration: 0.6 }}
              fill="none"
              d={character}
            ></motion.path>
          </Fragment>
        ))}
      </svg> */}

          {/* <motion.p
        data-scroll
        data-scroll-speed="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="text-3xl text-center z-[1] overflow-hidden"
      >
        {`I'm a frontend developer`}
      </motion.p> */}
          {/* <HeaderSmall text="Who we are?" /> */}
          <h1 className="text-3xl sm:text-2xl xl:text-1xl font-extrabold text-white leading-none mb-3">
            {'En-Logics'}
          </h1>
          <h5 className="text-7xl font-light text-violet text-justify">
            {'Empowering your business with software excellence'}
          </h5>
          <div className="grid sm:grid-cols-2 md:grid-cols-none xl:grid-cols-2 gap-4 mt-6">
            <div className="sm:col-span-1 xl:col-span-1">
              <Button type="solid" text="Know More" onClickHandler={() => router.push('#skills')} />
            </div>
            <div className="sm:col-span-1 xl:col-span-1">
              <Button
                type="outlined"
                text="Hire Us"
                // eslint-disable-next-line no-return-assign
                onClickHandler={() => window.open(personalDetails.resume, '_blank')}
              />
            </div>
          </div>
          {/* <motion.a
        data-scroll
        data-scroll-speed="2"
        data-scroll-delay="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.4 }}
        className="absolute left-[calc(50%-23px)] bottom-[10vh] cursor-pointer"
        href="#who"
        data-scroll-to
      >
        <BiChevronsDown className="animate-bounce" size={56} />
      </motion.a> */}
        </div>
        {/* <div className="hidden md:flex md:col-span-5 lg:col-span-6 text-justify text-white justify-end items-end ">
            <img
              src={personalDetails.profile_img}
              alt="Harsh Goel"
              className="ml-auto w-100 lg:w-4/5 pointer-events-none text-right"
            />
          </div> */}
      </div>
      {/* </motion.div> */}
    </>
  );
}
