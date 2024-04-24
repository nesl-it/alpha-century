import React from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Img,
  Text,
  Input,
  Heading,
  RatingBar,
  Testimonials,
} from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-scroll";
import "react-circular-progressbar/dist/styles.css";
// import HeroPage from 'pages/HeroPage'
export default function HomepagePage() {
  const containerData = [
    {
      imageUrl: "images/img_span_elementor_icon_gray_50_42x42.svg",
      altText: "experienced",
      heading: "Experienced Team",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
      bgColor: "bg-blue-900",
      borderColor: "border-indigo-500_19",
      headingColor: "text-white-A700", // Add a headingColor property
      textColor: "text-white-A700",
    },
    {
      imageUrl: "images/setting.png",
      altText: "Service",
      heading: "Service You Can Rely On",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
      bgColor: "bg-white",
      borderColor: "border-black",
      headingColor: "text-gray-A700",
      textColor: "text-black-700_99",
    },
    {
      imageUrl: "images/support.png",
      altText: "Support",
      heading: "24/7 Support",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
      bgColor: "bg-white",
      borderColor: "border-indigo-500_19",
      headingColor: "text-gray-A700",
      textColor: "text-black-700_99",
    },
    {
      imageUrl: "images/img_span_elementor_icon_42x42.svg",
      altText: "Sustainable",
      heading: "Sustainable Growth",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec gravida",
      bgColor: "bg-white",
      borderColor: "border-indigo-500_19",
      headingColor: "text-black-A700",
      textColor: "text-black-700_99",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Alpha Centurai</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[70px] bg-white-A700 md:gap-[52px] sm:gap-[35px]">
        <div className="flex flex-col gap-2.5">
          <section id="home">
            <div className="flex h-[691px] items-start justify-center bg-[url(/public/images/img_frame_1321314698.svg)] bg-cover bg-no-repeat p-9 md:h-auto sm:p-5">
              <div className="mb-[76px] flex w-[88%] flex-col gap-[54px] pt-[9px] md:w-full sm:gap-[27px]">
                <header>
                  <div className="flex items-center justify-between gap-5 md:flex-col">
                    <div className="flex w-[12%] items-center justify-center gap-2 md:w-full">
                      <Img
                        src="images/img_mask_group.png"
                        alt="image"
                        className="h-[56px] w-[48%] object-cover"
                      />
                      <Img
                        src="images/img_settings.svg"
                        alt="settings_one"
                        className="h-[36px] w-[52%]"
                      />
                    </div>
                    <div className="flex rounded-[27px] bg-white-A700 p-2">
                      <ul className="flex flex-wrap gap-[84px] p-2 md:gap-5">
                        <li>
                          <Link to="home" smooth={true} duration={500}>
                            <span className="self-end">
                              <Heading
                                size="s"
                                as="h6"
                                className="!text-blue-900"
                              >
                                Home
                              </Heading>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="about" smooth={true} duration={500}>
                            <span className="cursor-pointer self-end hover:font-semibold hover:text-blue-900">
                              <Text as="p">About us</Text>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="services" smooth={true} duration={500}>
                            <span className="cursor-pointer self-end hover:font-semibold hover:text-blue-900">
                              <Text as="p">Services</Text>
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link to="contact" smooth={true} duration={500}>
                            <span className="cursor-pointer self-end hover:font-semibold hover:text-blue-900">
                              <Text as="p">Contact Us</Text>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Button
                      size="md"
                      shape="round"
                      className="min-w-[154px] font-semibold sm:px-5"
                    >
                      Schedule a Call
                    </Button>
                  </div>
                </header>
                {/* <HeroPage/> */}
                <div className="flex items-center gap-[38px] md:flex-col">
                  <div className="flex w-full flex-col items-end">
                    <div className="flex flex-col self-stretch">
                      <Heading size="7xl" as="h1" className="w-[90%] md:w-full">
                        <span className="text-gray-900">
                          Dynamic
                          <span className="text-blue-900">
                            Consulting&nbsp;
                          </span>{" "}
                          Firm dedicated to help Startups.
                        </span>
                      </Heading>
                      <Text as="p" className="mt-3.5 leading-[150%]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum, maiores esse temporibus actium quas soluta
                        quis sed rerum.
                      </Text>
                      <div className="mt-6 flex w-[47%] gap-1 md:w-full">
                        <Link to="contact" smooth={true} duration={500}>
                          <Button
                            size="lg"
                            shape="round"
                            className="min-w-[129px] !rounded-[24px] font-semibold sm:px-5"
                          >
                            Contact Us
                          </Button>
                        </Link>
                        <div className="flex-1 p-3">
                          <div className="flex flex-col gap-1 self-end">
                            <div className="flex items-center gap-2 self-start">
                              <Heading size="xs" as="h3">
                                Know More
                              </Heading>
                              <Img
                                src="images/img_arrow_left.svg"
                                alt="arrowleft_one"
                                className="h-[16px] w-[16px] self-end"
                              />
                            </div>
                            <div className="h-px bg-gray-900" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_vector_70.svg"
                      alt="vectorseventy"
                      className="relative mt-[-82px] h-[146px] w-[43%]"
                    />
                  </div>
                  <div className="flex w-full flex-col items-start">
                    <Img
                      src="images/img_memento_media_x.png"
                      alt="mementomediax"
                      className="h-[380px] w-full rounded-[14px] object-cover md:h-auto"
                    />
                    <div className="relative ml-11 mt-[-52px] flex rounded-lg bg-white-A700 p-[15px] shadow-xl md:ml-0">
                      <div className="flex items-center gap-5">
                        <Button className="w-[64px] rounded">
                          <Img src="images/Group-28.png" />
                        </Button>
                        <div className="flex flex-col items-start gap-[7px]">
                          <Heading size="2xl" as="h3">
                            370%
                          </Heading>
                          <Text as="p" className="!text-gray-700">
                            Increase in Media Leads
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About us */}
          <section id="about">
            <div className="flex flex-col items-center justify-center gap-[57px] px-14 py-[75px] md:p-5 sm:gap-7">
              <Text
                size="4xl"
                as="p"
                className="mt-[19px] text-center !font-epilogue"
              >
                <span className="font-lato text-gray-700_01">
                  We have multidisciplinary teams to meet any
                </span>
                <span className="font-lato text-blue-900">
                  &nbsp;challenge.
                </span>
              </Text>
              <div className="mx-auto flex w-full max-w-[1199px] gap-14 rounded-[32px] bg-white-A700 p-[26px] shadow-xs md:flex-col md:p-5">
                <div className="mb-5 ml-[35px] flex w-[30%] flex-col items-center gap-6 md:mb-0 md:ml-0 md:w-full">
                  <Img
                    src="images/img_computer.svg"
                    alt="frontend_one"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="flex flex-col items-center gap-3.5 self-stretch pt-2">
                    <Heading as="h2" className="text-center">
                      Front-end
                    </Heading>
                    <Text
                      as="p"
                      className="text-center leading-6 !text-gray-500"
                    >
                      Our frontend developers understand the delicate balance
                      between aesthetics and functionality.{" "}
                    </Text>
                  </div>
                </div>
                <div className="flex w-[29%] flex-col items-center gap-6 md:w-full">
                  <Img
                    src="images/img_thumbs_up.svg"
                    alt="thumbsup_one"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="flex flex-col items-center gap-3.5 self-stretch pt-2">
                    <Heading as="h3" className="text-center">
                      Back-end
                    </Heading>
                    <Text
                      as="p"
                      className="text-center leading-6 !text-gray-500"
                    >
                      Our backend developers are the architects of efficiency
                      and security. They design and build the databases andAPIs.
                    </Text>
                  </div>
                </div>
                <div className="flex w-[27%] flex-col items-center gap-6 md:w-full">
                  <Img
                    src="images/img_television.svg"
                    alt="television_one"
                    className="h-[50px] w-[50px]"
                  />
                  <div className="flex flex-col items-center gap-[13px] self-stretch">
                    <Heading as="h4" className="mt-[9px] text-center">
                      Data Analysts
                    </Heading>
                    <Text
                      as="p"
                      className="text-center leading-6 !text-gray-500"
                    >
                      Our data analytics team is a blend of mathematicians,
                      statisticians, and technology enthusiasts.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col items-center gap-[51px] px-[150px] md:px-5 sm:gap-[25px]">
          <div className="flex w-[58%] flex-col items-center gap-6 md:w-full">
            <div className="flex">
              <Heading
                size="5xl"
                as="h2"
                className="mt-[7px] text-center !text-gray-800"
              >
                Trusted by Leading Organizations
              </Heading>
            </div>
            <Text
              size="3xl"
              as="p"
              className="w-[84%] text-center leading-[25px] !text-blue_gray-700_02 md:w-full"
            >
              Our 4,000+ team has expertise in almost every programming
              language.
            </Text>
          </div>
          <div className="mx-auto flex w-full max-w-[1140px] self-stretch px-2.5">
            <div className="flex w-full justify-center gap-5 p-2.5 md:flex-col">
              <div className="w-full border border-gray-200">
                <Img
                  src="images/img_google_svg.svg"
                  alt="googlesvg_one"
                  className="h-[79px] w-full md:h-auto"
                />
              </div>
              <div className="relative h-[79px] w-full p-[7px]  border border-gray-200 md:h-auto">
                <Img
                  src="images/img_group.svg"
                  alt="image_one"
                  className="h-[61px] w-[98%]"
                />
                <div className="absolute left-0 right-0 top-[14.70px] m-auto flex w-[85%] items-center">
                  <Img
                    src="images/img_mask_group_45x46.png"
                    alt="image_two"
                    className="h-[45px] w-[46px] object-cover"
                  />
                  <div className="ml-[9px] flex flex-1 flex-col gap-0.5">
                    <Img
                      src="images/img_settings_blue_gray_700.svg"
                      alt="settings_three"
                      className="h-[16px]"
                    />
                    <Img
                      src="images/img_vector_14x76.png"
                      alt="vector_one"
                      className="h-[14px] object-cover"
                    />
                  </div>
                  <Img
                    src="images/img_user.svg"
                    alt="user_one"
                    className="ml-[19px] h-[17px]"
                  />
                </div>
              </div>
              <div className="relative h-[79px] w-full p-[7px]  border border-gray-200  md:h-auto">
                <Img
                  src="images/img_group.svg"
                  alt="image_three"
                  className="h-[61px] w-[98%]"
                />
                <div className="absolute left-0 right-0 top-[12.00px] m-auto flex w-[85%] items-center gap-[11px]">
                  <Img
                    src="images/img_mask_group_49x53.png"
                    alt="image_four"
                    className="h-[49px] w-[30%] object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <Img
                      src="images/img_settings_blue_gray_700_11x63.svg"
                      alt="settings_five"
                      className="relative z-[1] h-[11px] w-[51%]"
                    />
                    <div className="relative mt-[-4px] flex items-start gap-[13px]">
                      <RatingBar
                        value={5}
                        isEditable={true}
                        color="#e4aa13"
                        activeColor="#e4aa13"
                        size={13}
                        className="flex flex-1 justify-between"
                      />
                      <Img
                        src="images/img_television_blue_gray_700_01.svg"
                        alt="television_one"
                        className="mb-[5px] h-[18px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-[5px]  border border-gray-200 ">
                <Img
                  src="images/img_vector_63x205.png"
                  alt="vector_three"
                  className="relative z-[2] h-[63px] w-full object-cover md:h-auto"
                />
                <Img
                  src="images/img_group.svg"
                  alt="image_five"
                  className="relative mb-1.5 mt-[-61px] h-[61px] w-full md:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <section id="services">
          <div className="flex flex-col items-center gap-[62px] p-[30px] sm:gap-[31px] sm:p-5">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[21px] px-[5px] pt-[5px]">
              <Heading size="4xl" as="h2">
                Our Services
              </Heading>
              <Text
                as="p"
                className="w-[70%] text-center leading-[26px] md:w-full"
              >
                We are a dynamic consulting firm dedicated to helping startups,
                businesses, and individuals navigate the digital landscape.
                Specializing in web services, mobile development, and
                cutting-edge technologies, we transform ideas into digital
                succes
              </Text>
            </div>
            <div className="mx-auto mb-[30px] flex w-full max-w-[1200px] flex-col gap-[41px]">
              <div className="flex flex-1 justify-between gap-5 px-12 md:flex-col md:px-5">
                <div className="flex w-[42%] items-start justify-center gap-4 md:w-full sm:flex-col">
                  <Img
                    src="images/img_span_elementor_icon_gray_50.svg"
                    alt="web_development"
                    className="h-[58px] w-[58px] rounded-[12px] sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[5px] sm:self-stretch">
                    <Text
                      size="3xl"
                      as="p"
                      className="!font-inter !text-gray-900"
                    >
                      Web Development
                    </Text>
                    <Text as="p" className="!font-inter leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed pulvinar erat a interdum auctor.
                    </Text>
                  </div>
                </div>
                <div className="flex w-[42%] items-start justify-center gap-4 md:w-full sm:flex-col">
                  <Img
                    src="images/img_span_elementor_icon_gray_50_58x58.svg"
                    alt="web_development"
                    className="h-[58px] w-[58px] rounded-[12px] sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-1.5 sm:self-stretch">
                    <Text
                      size="3xl"
                      as="p"
                      className="!font-inter !text-gray-900"
                    >
                      Mobile Development
                    </Text>
                    <Text as="p" className="!font-inter leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed pulvinar erat a interdum auctor.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-between gap-5 px-[45px] md:flex-col md:px-5">
                <div className="flex w-[42%] items-start justify-center gap-4 md:w-full sm:flex-col">
                  <Img
                    src="images/img_span_elementor_icon_58x58.svg"
                    alt="spanelementor"
                    className="h-[58px] w-[58px] rounded-[12px] sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
                    <Text
                      size="3xl"
                      as="p"
                      className="!font-inter !text-gray-900"
                    >
                      Database
                    </Text>
                    <Text as="p" className="!font-inter leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed pulvinar erat a interdum auctor.
                    </Text>
                  </div>
                </div>
                <div className="flex w-[43%] items-start justify-center gap-4 md:w-full sm:flex-col">
                  <div className="flex rounded-[12px] border border-solid border-blue_gray-100 bg-gray-50 p-3">
                    <Img
                      src="images/img_devops_1.png"
                      alt="devopsone_one"
                      className="h-[34px] w-[34px] object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-[5px] sm:self-stretch">
                    <Text
                      size="3xl"
                      as="p"
                      className="!font-inter !text-gray-900"
                    >
                      DevOps
                    </Text>
                    <Text as="p" className="!font-inter leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed pulvinar erat a interdum auctor.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-between gap-5 px-12 md:flex-col md:px-5">
                <div className="flex w-[42%] items-start justify-center gap-4 md:w-full sm:flex-col">
                  <Img
                    src="images/img_span_elementor_icon_1.svg"
                    alt="spanelementor"
                    className="h-[58px] w-[58px] rounded-[12px] sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
                    <Text
                      size="3xl"
                      as="p"
                      className="!font-inter !text-gray-900"
                    >
                      Cloud Services
                    </Text>
                    <Text as="p" className="!font-inter leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed pulvinar erat a interdum auctor.
                    </Text>
                  </div>
                </div>
                <div className="flex w-[42%] items-start justify-center gap-4 md:w-full sm:flex-col">
                  <Img
                    src="images/img_span_elementor_icon.svg"
                    alt="spanelementor"
                    className="h-[58px] w-[58px] rounded-[12px] sm:w-full"
                  />
                  <div className="flex flex-1 flex-col items-start gap-[7px] sm:self-stretch">
                    <Text
                      size="3xl"
                      as="p"
                      className="!font-inter !text-gray-900"
                    >
                      Frontend Frameworks
                    </Text>
                    <Text as="p" className="!font-inter leading-[22px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed pulvinar erat a interdum auctor.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between gap-5 bg-gray-50 p-[58px] md:flex-col md:p-5">
          <div className="ml-[92px] flex w-[38%] flex-col items-start gap-[19px] md:ml-0 md:w-full">
            <Text
              size="3xl"
              as="p"
              className="!font-normal uppercase !text-blue-900"
            >
              Benefits
            </Text>
            <Heading size="3xl" as="h2" className="leading-[130%]">
              Choose Us: Your Path to Innovation and Success
            </Heading>
            <Text
              as="p"
              className="leading-[160%] !text-gray-700_99 opacity-0.7"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit{" "}
            </Text>
          </div>
          <div className="mr-[62px] w-[56%] grid-cols-[repeat(auto-fill,_minmax(255px_,_1fr))] gap-6 md:mr-0 flex flex-wrap">
            {containerData.map((container, index) => (
              <div
                key={index}
                className={`flex w-full flex-col items-start gap-[9px] rounded-[10px] border border-solid ${container.bgColor} ${container.borderColor} !important p-[25px]  w-[calc(45.333333%)]`}
              >
                <Img
                  src={container.imageUrl}
                  alt={container.altText}
                  className="ml-[3px] h-[42px] w-[42px] rounded-lg md:ml-0"
                />
                <Heading
                  as="h2"
                  className={`ml-[3px] md:ml-0 ${container.headingColor}`}
                >
                  {container.heading}
                </Heading>
                <Text
                  as="p"
                  className={`ml-[3px] !font-medium leading-[160%] opacity-0.7 md:ml-0 ${container.textColor}`}
                >
                  {container.text}
                </Text>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-[21px]">
          <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-5 md:flex-col md:p-5">
            <div className="relative h-[360px] w-[45%] md:w-full">
              <Img
                src="images/img_rectangle_14.png"
                alt="image_six"
                className="absolute bottom-0 left-[0.00px] top-0 my-auto h-[360px] w-[77%] rounded-[10px] object-cover"
              />
              <div className="absolute bottom-0 right-[4.00px] top-0 my-auto flex h-max w-[52%] flex-col gap-[5px]">
                <div className="relative h-[80px] rotate-[180deg] shadow-md md:h-auto">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[80px] bg-cover bg-no-repeat md:h-auto">
                    <div className="relative h-[80px] bg-cover bg-no-repeat p-[9px] bg-custom-gray">
                      <div className="absolute bottom-[26.39px] right-[25.00px] m-auto flex flex-wrap items-center gap-[23px]">
                        <Text
                          as="p"
                          className="rotate-[180deg] self-end !font-roboto !text-gray-500"
                        >
                          Legend
                        </Text>{" "}
                        <p className="rotate-[180deg]  text-gray-600 !font-roboto !text-blue-900 leading-loose">
                          +25%
                        </p>
                        {/* <Text
                          size="4xl"
                          as="p"
                          className="rotate-[180deg] text-right !font-roboto !text-blue-900"
                        >
                          +25% absolute bottom-0 left-[27.00px] top-0 my-auto h-[60px] w-[60px] md:h-auto
                        </Text> */}
                      </div>
                      {/* absolute bottom-0 left-[27.00px] top-0 my-auto h-[60px] w-[60px] md:h-auto */}
                      <div className="flex items-center justify-center h-[60px] w-[60px] md:h-auto">
                        <Text
                          size="3xl"
                          as="p"
                          className="rotate-[180deg] text-right !font-roboto !text-blue-900"
                        >
                          40%
                        </Text>
                        <CircularProgressbar
                          strokeWidth={8}
                          value={63}
                          styles={{
                            trail: { stroke: "#d8d7d7" },
                            path: { strokeLinecap: "square" },
                          }}
                          className="absolute bottom-2 m-auto h-[60px] w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-[13px] rounded-[16px] bg-gray-50 px-[17px] pt-[17px] shadow-lg">
                  <Heading
                    size="s"
                    as="h2"
                    className="ml-3 !font-bold tracking-[0.01px] md:ml-0"
                  >
                    Today sales
                  </Heading>
                  <div className="ml-3 flex flex-wrap items-center gap-[5px] md:ml-0">
                    <Heading
                      size="xl"
                      as="h3"
                      className="h-[34px] !text-blue-900"
                    >
                      27
                    </Heading>
                    <Text
                      as="p"
                      className="mb-1 self-end !font-medium !text-blue-900"
                    >
                      September 2019
                    </Text>
                  </div>
                  <div className="self-stretch">
                    <div className="relative z-[3] flex flex-wrap justify-between gap-5">
                      <Text size="xs" as="p" className="text-center uppercase">
                        8:00
                      </Text>
                      <Text size="xs" as="p" className="text-center uppercase">
                        12:00
                      </Text>
                      <Text size="xs" as="p" className="text-center uppercase">
                        16:00
                      </Text>
                      <Text size="xs" as="p" className="text-center uppercase">
                        20:00
                      </Text>
                    </div>
                    <div className="relative mt-[-11px] flex border-l-[0.5px] border-dashed border-deep_purple-50">
                      <div className="relative h-[80px] flex-1">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max gap-[17px]">
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                          <div className="h-full w-[2px] bg-gray-50" />
                        </div>
                        <Img
                          src="images/img_progressbar.svg"
                          alt="progressbar_one"
                          className="absolute left-0 right-0 top-[29.00px] m-auto h-[16px] w-full"
                        />
                      </div>
                      <div className="relative z-[4] ml-[-1px] h-full w-[2px] bg-gray-50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[46%] flex-col items-start gap-6 md:w-full">
              <Text
                size="3xl"
                as="p"
                className="ml-0.5 !font-normal !text-blue-900 md:ml-0"
              >
                TESTIMONIALS
              </Text>
              <div className="self-stretch pr-[63px] md:pr-5">
                <Heading size="6xl" as="h4" className="leading-[54px]">
                  Tech Services: Innovate, Create, Elevate
                </Heading>
              </div>
              <Text
                size="3xl"
                as="p"
                className="ml-0.5 !font-normal leading-[25px] !text-blue_gray-700_02 md:ml-0"
              >
                Our 4,000+ team has expertise in almost every programming
                language.
              </Text>
            </div>
          </div>
          <Testimonials />
        </div>
        <section id="contact">
          <footer className="flex items-center justify-center bg-gray-50_01 p-5">
            <div className="mt-[30px] flex w-[79%] flex-col gap-[55px] md:w-full sm:gap-[27px]">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="flex w-[53%] items-start justify-between gap-5 md:w-full">
                  <div className="flex w-[30%] flex-col items-start gap-[19px]">
                    <Heading size="s" as="h6">
                      Services
                    </Heading>
                    <div className="flex flex-col items-start gap-3.5">
                      <span>
                        <Text as="p">Web Development</Text>
                      </span>
                      <span>
                        <Text as="p">Mobile Development</Text>
                      </span>
                      <span>
                        <Text as="p">Database</Text>
                      </span>
                      <span>
                        <Text as="p">DevOps</Text>
                      </span>
                      <span>
                        <Text as="p">Cloud Services</Text>
                      </span>
                      <span>
                        <Text as="p">Frontend Frameworks</Text>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[19px]">
                    <Heading size="s" as="h6">
                      Information
                    </Heading>
                    <div className="flex flex-col items-start gap-[15px]">
                      <span target="_blank" rel="noreferrer">
                        <Text as="p">FAQ</Text>
                      </span>
                      <span target="_blank" rel="noreferrer">
                        <Text as="p">Support</Text>
                      </span>
                    </div>
                  </div>
                  <div className="flex w-[17%] flex-col items-start gap-[18px] pt-[5px]">
                    <Heading size="s" as="h6">
                      Company
                    </Heading>
                    <div className="flex flex-col items-start gap-4">
                      <span>
                        <Text as="p">About us</Text>
                      </span>
                      <span target="_blank" rel="noreferrer">
                        <Text as="p">Services</Text>
                      </span>
                      <span>
                        <Text as="p">Contact us</Text>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex w-[34%] flex-col items-start justify-end gap-[19px] rounded-[30px] border-[0.5px] border-solid border-indigo-50 bg-white-A700 p-[23px] md:w-full sm:p-5">
                  <Text as="p" className="ml-0.5 mt-3 !text-gray-900 md:ml-0">
                    Subscribe
                  </Text>
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder={`Email address`}
                    suffix={
                      <div className="flex h-[51px] w-[67px] items-center justify-center rounded-[35%] bg-blue-900">
                        <Img
                          src="images/img_arrowleft_white_a700.svg"
                          alt="arrow_left"
                          className="h-[13px] w-[16px]"
                        />
                      </div>
                    }
                    className="ml-0.5 md:ml-0 sm:pl-5"
                  />
                  <Text
                    size="s"
                    as="p"
                    className="mb-[7px] ml-0.5 leading-5 !text-gray-700_90 opacity-0.6 md:ml-0"
                  >
                    Hello, we are Lift Media. Our goal is to translate the
                    positive effects from revolutionizing how companies engage
                    with their clients & their team.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[23px]">
                <div className="h-px border-[0.5px] border-solid border-gray-900_5f bg-gray-900_5f opacity-0.06" />
                <div className="flex items-center justify-between gap-5 pl-[454px] md:pl-5">
                  <ul className="flex w-[30%] flex-wrap items-center justify-between gap-5">
                    <li>
                      <span>
                        <Text size="lg" as="p">
                          Terms
                        </Text>
                      </span>
                    </li>
                    <li>
                      <span className="self-end">
                        <Text size="lg" as="p">
                          Privacy
                        </Text>
                      </span>
                    </li>
                    <li>
                      <span className="mr-[7px]">
                        <Text size="lg" as="p" className="cookies-data">
                          Cookies
                        </Text>
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-col rounded-lg p-6">
                    {/* Content of the card */}
                    <div className="flex items-center">
                      <>
                      <img
                        src="images/Linkedin6.png"
                        alt="Profile"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                       <img
                        src="images/Facebook.png"
                        alt="Facebook"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                       <img
                        src="images/Twitter.png"
                        alt="Twitter"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      </>
                    </div>
                  </div>

                  {/* <div className="flex gap-[15px]">
                    <Button
                      size="xs"
                      shape="square"
                      className="w-[35px] h-[35px] bg-white rounded-lg shadow-md focus:outline-none"
                    >
                      <Img
                        src="images/Linkedin7.png"
                        alt="linkdein"
                        className=""
                      />
                    </Button>
                    <Button size="xs" shape="square" className="w-[35px]">
                      <Img src="images/Facebook3.png" />
                    </Button>
                    <Button
                      size="xs"
                      shape="square"
                      className="w-[35px] btn-primary"
                    >
                      <Img src="images/Twitter1.png" />
                      
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}
