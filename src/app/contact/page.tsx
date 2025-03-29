"use client";

import { Button } from "@/components/ui/button";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

type Info = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const info: Info[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+51) 935 064 473",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kellerkatlin.k@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Jr Mateo Pumacahua 311, Tarapoto, Peru",
  },
];

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
// import {
//     Select,
//     SelectContent,
//     SelectGroup,
//     SelectItem,
//     SelectLabel,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#d7d7dc] dark:bg-[#27272c] rounded-xl"
              action="https://formsubmit.co/kellerkatlin.k@gmail.com"
              method="POST"
            >
              <h3 className="text-4xl text-accent">
                Let&apos;s work together!
              </h3>
              <p className="text-black/60 dark:text-white/60">
                Fill out the form below and I will get back to you as soon as
                possible.
              </p>
              {/*inputs */}
              <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table"/>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 first-line:">
                <Input
                  type="firstname"
                  name="firstname"
                  placeholder="Fistname"
                  required
                />
                <Input
                  type="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  required
                />
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="phone" name="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              {/* <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select Service
                                        </SelectLabel>
                                        <SelectItem value="wdev">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="wd">
                                            Web Design
                                        </SelectItem>
                                        <SelectItem value="md">
                                            Mobile Development
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select> */}
              {/* textarea */}
              <Textarea
                className="h-[100px] "
                name="message"
                placeholder="Type your message here."
                required
              />
              {/* button */}
              <Button size="md" className="max-w-40" aria-label="send message">
                Send Message
              </Button>
            </form>
          </div>
          {/*info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="min-w-[52px] min-h-[52px] xl:min-w-[72px] xl:min-h-[72px] dark:bg-[#27272c] bg-[#d7d7dc] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="dark:text-white/60 text-black/60">
                      {item.title}
                    </p>
                    <h3 className="flex flex-wrap text-xl">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
