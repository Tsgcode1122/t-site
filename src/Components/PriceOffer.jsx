import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import "../ts.css";
import { motion, AnimatePresence } from "framer-motion";
const PriceOffer = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <>
      <div className="iix:pt-6 ixr:pt-10 pb-16 justify-center items-center text-center  iix:px-2 ixr:px-5 ixx:px-6 s:px-12 m:px-24 l:pt-32 sl:px-36 br bg-lightC box-shad mt-16 ixx:pb-40  iix:pb-28 l:px-16 ixr:pb-32 iix:mt-[-5rem] ixr:mt-[-6rem] ">
        <h3 className="tsgb  font-semibold iix:text-[20px] text-center ixr:text-[25px] s:text-[35px] s:leading-normal leading-8 l:text-[40px] l:px-20">
          Enjoy top-notch service and unbeatable prices
          <span className=" shadow-inner border-b-2 border-b-brightC p-1 iix:p-2 rounded-md bg-lightC ">
            – no compromises!
          </span>{" "}
        </h3>
        <div className="window min-h-[380px] s:mx-8 s:p-4  l:mx-20 iix:min-h-[320px] bg-whiteC box-shad flex flex-col break-before-page mt-6 m:hidden ">
          <nav className="bg-whiteC h-12 br iix:h-10 items-center justify-center  ixx:p-4 iix:py-1 iix:text-[14px]  border-b border-b-lightC ixr:p-2  ">
            <ul className="list-none flex items-center tsgf  iix:px-2">
              {tabs.map((item) => (
                <li
                  key={item.label}
                  className={`${
                    item === selectedTab
                      ? "selected"
                      : "list-none tsgf flex  items-center  iix:h-[30px] iix:text-[14px]   bg-whiteC relative font-medium"
                  }`}
                  onClick={() => setSelectedTab(item)}
                >
                  {`${item.label}`}
                  {item === selectedTab ? (
                    <motion.div
                      className="absolute bg-brightC h-[1px] left-0 right-0 bottom-[-1px]  "
                      layoutId="underline"
                    />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <main className="flex flex-1 select-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? (
                  <ul className="flex flex-col items-justify p-4">
                    {selectedTab.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-8  iix:text-[14px] text-left "
                      >
                        <span>✔️</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  "😋"
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
        <div className="hidden m:grid m:grid-cols-2 l:grid l:grid-cols-3 m:mt-8 gap-4">
          {tabs.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col bg-lightC box-shad rounded-2xl p-4 border-b-2 border-b-brightC ">
                <h2 className="font-bold tsgb text-left mb-4 border-b-2">{`${item.label}`}</h2>

                <ul className="list-disc text-left">
                  {item.items.map((listItem, listIndex) => (
                    <li
                      key={listIndex}
                      className="flex gap-3 items-center tsgf"
                    >
                      <span className="mr-2" role="img" aria-label="check-mark">
                        ✔️
                      </span>{" "}
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PriceOffer;
