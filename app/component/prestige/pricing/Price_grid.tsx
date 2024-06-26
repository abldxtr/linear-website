import { AiOutlineCheck } from "react-icons/ai";
import { CgTally } from "react-icons/cg";
import classNames from "classnames";
import { motion } from "framer-motion";

// type act = "yearly" | "montly" as const;
export enum act {
  yearly = "yearly",
  montly = "montly",
}

export default function Price_grid({ active }: { active: act }) {
  type price = {
    head: string;
    subhead: string;
    mon: number;
    year: number;
    subitems: string[];
    doc: string;
  };

  const items: price[] = [
    {
      head: "starter",
      subhead:
        "For driven individuals who want to start with essential features and resources to kickstart your journey.",
      mon: 9,
      year: 99,
      subitems: [
        "Standart analytics",
        "Limited tracking",
        "Basic AI model",
        "Standart integrations",
        "Email support",
      ],
      doc: "Get started",
    },
    {
      head: "Pro",
      subhead:
        "For ambitious professionals who require more innovative and additional tools to stay ahead of the competition.",
      mon: 19,
      year: 149,
      subitems: [
        "Advanced analytics",
        "Unlimited tracking",
        "Custom AI model",
        "Custom integrations",
        "Premium support",
      ],
      doc: "Get started",
    },
    {
      head: "Enterprise",
      subhead:
        "For companies who want advanced features with specific needs to achieve better business results.",
      mon: 0,
      year: 0,

      subitems: [
        "Advanced analytics",
        "Unlimited tracking",
        "Custom AI model",
        "Custom integrations",
        "Premium support",
      ],
      doc: "Contact us",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] text-white max-w-[1280px] mx-auto ">
      {items.map((item, index) => {
        return (
          <motion.div
            key={item.head}
            className="p-[30px]  relative pt-[72px] border border-[rgb(36,36,36)] bg-[rgb(22,22,22)] rounded-[24px] flex flex-col gap-[48px]  items-center justify-center "
          >
            {index === 1 && (
              <div className="flex absolute top-4 right-4 items-center w-min justify-center gap-[4px] py-[6px] px-[10px] rounded-[32px] border border-[#236456] bg-[#112220] ">
                <div className="text-[#33c6ab] ">
                  <CgTally />
                </div>
                <div className="text-[#33c6ab] text-[14px]  ">Popular</div>
              </div>
            )}
            <div className="flex flex-col gap-[24px] items-center ">
              <h3 className="text-[32px]">{item.head} </h3>
              <p className="text-[16px] text-[rgb(155,156,161)] text-left ">
                {item.subhead}{" "}
              </p>
            </div>

            <h3 className=" h-[103px]  flex items-center justify-center    ">
              <motion.p
                transition={{ type: "spring", duration: 0.6 }}
                // layoutId="priz"
                className={classNames(
                  index !== 2 ? "text-[40px] " : "text-[32px]",
                )}
              >
                {active === "yearly" && index < 2 ? item.year : null}
                {active === "montly" && index < 2 ? item.mon : null}
                {index === 2 && "Custom"}

                <span className="text-[16px] text-[rgb(155,156,161)]  ">
                  {index !== 2 && "/month"}{" "}
                </span>
              </motion.p>
            </h3>
            <div className="h-[1px] w-[272px] bg-[rgb(36,36,36)] " />

            <ul className="flex flex-col  justify-start w-full">
              {item.subitems.map((it, index) => {
                return (
                  <>
                    <li className="flex items-center justify-start gap-[8px] ">
                      <AiOutlineCheck className=" w-[16px] h-[16px] text-[rgb(251,251,251)] " />

                      <span className="text-[16px] text-[rgb(251,251,251)] ">
                        {it}
                      </span>
                    </li>
                  </>
                );
              })}
            </ul>
            <button className="w-full border border-[rgb(59,59,59)] bg-[rgb(31,31,31)] rounded-[64px] py-[16px] px-[32px] text-[rgb(251,251,251)] hover:bg-[rgb(48,48,48)] hover:border-[rgb(59,59,59)] transition ">
              {item.doc}
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}
