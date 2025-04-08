import { motion } from "motion/react";
import styled from "styled-components";
import CircleAnimationCanvas from "./CirclesAnimationCanvas";

type Prop = {
  sectionAbout: React.RefObject<HTMLDivElement | null>;
  scrollTosection: (ref: React.RefObject<HTMLDivElement | null>) => void;
  firstOverlayVisible: boolean;
  secondOverlayVisible: boolean;
  thirdOverlayVisible: boolean;
  forthOverlayVisible: boolean;
  fifthOverlayVisible: boolean;
  sixthOverlayVisible: boolean;
};
const Overlay = ({
  sectionAbout,
  scrollTosection,
  firstOverlayVisible,
  secondOverlayVisible,
  thirdOverlayVisible,
  forthOverlayVisible,
  fifthOverlayVisible,
  sixthOverlayVisible,
}: Prop) => {
  const motionOverlay1 = {
    hidden: {
      // x: "-350%",
      x: "-100%",
    },
    show: {
      // x: "100%",
      x: "0%",
      transition: { duration: 1, delay: 2 },
    },
  };

  const motionOverlay2 = {
    hidden: {
      x: "-100%",
      //   opacity: 0,
    },
    show: {
      x: "0%",
      //   opacity: 1,
      transition: { duration: 1, delay: 3 },
    },
  };

  const motionText = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delay: 4,
      },
    },
  };

  const motionOverlay3 = {
    hidden: {
      x: "100%",
    },
    show: {
      x: "-0%",
      transition: { duration: 1, delay: 7 },
    },
  };

  const motionOverlay4 = {
    hidden: {
      x: "100%",
      // opacity: 0,
    },
    show: {
      x: "-0%",
      //   opacity: 1,
      transition: { duration: 1, delay: 8 },
    },
  };

  const motionOverlay5 = {
    hidden: {
      x: "-100%",
      //   opacity: 0,
    },
    show: {
      x: "-0%",
      //   opacity: 1,
      transition: { duration: 1, delay: 12 },
    },
  };
  const motionOverlay6 = {
    hidden: {
      x: "-100%",
      //   opacity: 0,
    },
    show: {
      x: "-0%",
      //   opacity: 1,
      transition: { duration: 1, delay: 14 },
    },
  };
  const motionContent = {
    hidden: {
      opacity: 0, // Start with opacity 0 (invisible)
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.1,
        delay: 9,
      },
    },
  };

  const mouth1 = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { duration: 1, repeat: Infinity, delay: 1 },
    },
  };
  const mouth2 = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 0,
      transition: { duration: 1, repeat: Infinity },
    },
  };

  const line = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    show: {
      opacity: 1,
      pathLength: 1,
      stiffness: 10,
      transition: { duration: 2, delay: 9 },
    },
  };

  const motionButton = {
    hidden: {},
    show: {
      scale: [1, 1.2, 1.3, 1.2, 1], // Slightly bigger pulse in the middle
      backgroundColor: ["#fad24d", "#ffcc00", "#fad24d", "#ffcc00", "#fad24d"], // Change color when pulsing
      transition: {
        duration: 0.6, // Faster duration for quicker beat
        ease: "easeInOut", // Smooth easing for the heartbeat
        times: [0, 0.2, 0.5, 0.8, 1], // Adjust the pulse timing to keep it fast and rhythmic
        repeat: Infinity, // Infinite loop for the heartbeat effect
        repeatDelay: 0.2, // Shorter delay between each pulse for faster heartbeat
      },
    },
  };

  return (
    <>
      {firstOverlayVisible && (
        <StyleOverlayYellow
          variants={motionOverlay1}
          initial="hidden"
          animate="show"
        ></StyleOverlayYellow>
      )}
      {secondOverlayVisible && (
        <StyleOverlay variants={motionOverlay2} initial="hidden" animate="show">
          <motion.div variants={motionText} initial="hidden" animate="show">
            <p>
              I am always striving to{" "}
              <b
                style={{
                  background: "#fad24d",
                  color: "#151515",
                  borderRadius: "1rem",
                  padding: ".2rem",
                }}
              >
                expand
              </b>{" "}
              my knowledge in web development.
            </p>
            <p>
              I embrace new challenges and am driven to{" "}
              <b
                style={{
                  background: "#fad24d",
                  color: "#151515",
                  borderRadius: "1rem",
                  padding: ".2rem",
                }}
              >
                continuously learn
              </b>
            </p>
            <p>and deepen my understanding in this area.</p>
          </motion.div>
        </StyleOverlay>
      )}
      {thirdOverlayVisible && (
        <StyleOverlayYellow
          variants={motionOverlay3}
          initial="hidden"
          animate="show"
        ></StyleOverlayYellow>
      )}
      {forthOverlayVisible && (
        <StyledOverlayTalking
          variants={motionOverlay4}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <CircleAnimationCanvas />
          <motion.div variants={motionContent} initial="hidden" animate="show">
            <StyleSvg
              width="304"
              height="403"
              viewBox="0 0 364 453"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M351.26 349.024C344.435 333.403 350.296 329.559 346.103 313.064C343.373 302.325 337.273 297.985 335.183 288.982C333.197 280.435 336.666 265.547 334.576 258.392C330.801 245.466 326.067 242.051 323.656 231.381C321.229 220.642 327.599 212.506 325.476 201.116C322.816 186.845 318.035 180.998 316.073 173.455C312.433 159.462 313.549 155.962 313.95 144.491C314.86 118.456 305.605 86.4994 298.48 70.293C290.414 51.9465 279.827 41.7062 267.254 36.1228H182V421.758C282.1 422.734 364 390.516 364 390.516C363.697 362.529 359.18 367.15 351.26 349.024Z"
                fill="#5D392E"
              />
              <path
                d="M96.7457 36.1228C84.1723 41.7062 73.5862 51.9465 65.52 70.293C58.3947 86.4994 49.14 118.456 50.05 144.491C50.4504 155.961 51.567 159.461 47.927 173.455C45.965 180.998 41.1839 186.846 38.5239 201.116C36.4009 212.506 42.7709 220.642 40.3439 231.381C37.9334 242.051 33.1986 245.466 29.4239 258.392C27.3337 265.548 30.8026 280.435 28.817 288.982C26.7267 297.985 20.627 302.325 17.897 313.064C13.7037 329.559 19.565 333.403 12.74 349.024C4.82027 367.149 0.30303 362.529 0 390.516C0 390.516 81.9 422.734 182 421.758V36.1228H96.7457Z"
                fill="#5D392E"
              />
              <path
                d="M317.024 426.472L314.309 404.62L308.355 356.716C306.736 343.689 299.118 332.409 288.083 326.701L260 312.175C257.267 310.761 254.084 312.043 252.729 314.911L235.637 308.164C229.692 306.038 225.682 300.069 225.682 293.345V268.155L257.041 254.136C273.318 246.86 283.92 229.797 283.92 210.879V203.069C295.982 203.069 305.76 192.578 305.76 179.638C305.76 166.697 295.982 156.207 283.92 156.207V156.141C283.932 156.154 283.945 156.166 283.956 156.178C257.785 128.159 183.4 132.707 182.032 94.7852C180.664 132.72 106.227 128.155 80.08 156.207C68.0179 156.207 58.24 166.697 58.24 179.638C58.24 192.578 68.0179 203.069 80.08 203.069V210.879C80.08 229.796 90.6824 246.859 106.96 254.136L138.32 268.155V293.344C138.32 300.068 134.31 306.037 128.365 308.163L111.273 314.91C109.918 312.042 106.735 310.76 104.002 312.174L75.9186 326.7C64.8839 332.409 57.2654 343.688 55.6465 356.715L49.6933 404.619L46.9778 426.471C45.2315 440.518 55.4163 452.999 68.6249 452.999H295.374C308.584 452.999 318.769 440.518 317.024 426.472Z"
                fill="#FDC88E"
              />
              <path
                d="M138.32 267.504V293.344C138.32 298.902 135.575 303.939 131.266 306.72C192.166 318.009 225.678 267.507 225.68 267.504H138.32Z"
                fill="#F5B97A"
              />
              <path
                d="M317.024 426.472L308.355 356.715C306.736 343.688 299.118 332.409 288.083 326.7L260 312.174C257.172 310.711 253.857 312.129 252.59 315.209C234.175 359.949 202.627 380.753 182 390.519C161.373 380.754 129.825 359.949 111.412 315.208C110.145 312.128 106.829 310.711 104.002 312.173L75.9186 326.699C64.8839 332.408 57.2654 343.687 55.6465 356.714L46.9778 426.471C45.2325 440.517 55.4172 452.999 68.6267 452.999H295.376C308.584 453 318.769 440.518 317.024 426.472Z"
                fill="black"
              />
              <path
                d="M80.08 203.069C92.1419 203.069 101.92 192.578 101.92 179.638C101.92 166.697 92.1419 156.207 80.08 156.207C68.0181 156.207 58.24 166.697 58.24 179.638C58.24 192.578 68.0181 203.069 80.08 203.069Z"
                fill="#FDC88E"
              />
              <path
                d="M283.92 156.207V140.586C283.92 119.019 267.623 101.534 247.52 101.534H116.48C96.3763 101.534 80.08 119.019 80.08 140.586V156.207C68.0179 156.207 58.24 166.697 58.24 179.638C58.24 192.578 68.0179 203.069 80.08 203.069V210.879C80.08 229.796 90.6824 246.859 106.96 254.136L153.998 275.164C162.871 279.13 172.388 281.172 181.999 281.172C191.61 281.172 201.126 279.129 209.999 275.164L257.04 254.135C273.318 246.86 283.92 229.797 283.92 210.879V203.069C295.982 203.069 305.76 192.578 305.76 179.638C305.76 166.697 295.982 156.207 283.92 156.207Z"
                fill="#FFD7A3"
              />
              <path
                d="M189.188 96.6528L178.36 89.8188C178.36 89.8188 159.57 115.726 109.2 128.87C83.9475 135.46 80.08 156.207 80.08 156.207C68.0189 156.208 58.24 166.698 58.24 179.638C58.24 192.578 68.0179 203.069 80.08 203.069V210.879C80.08 229.797 90.6824 246.86 106.96 254.136L153.997 275.164C156.3 276.193 158.649 277.079 161.029 277.848C140.241 261.533 126.404 247.27 118.295 237.945C112.397 231.159 109.2 222.206 109.2 212.927V155.23C129.22 139.285 179.27 141.237 189.188 96.6528Z"
                fill="#FDC88E"
              />
              <path
                d="M131.04 187.448C127.036 187.448 123.76 183.933 123.76 179.638V171.827C123.76 167.532 127.036 164.017 131.04 164.017C135.044 164.017 138.32 167.532 138.32 171.827V179.638C138.32 183.933 135.044 187.448 131.04 187.448Z"
                fill="#623F33"
              />
              <path
                d="M232.96 187.448C228.956 187.448 225.68 183.933 225.68 179.638V171.827C225.68 167.532 228.956 164.017 232.96 164.017C236.964 164.017 240.24 167.532 240.24 171.827V179.638C240.24 183.933 236.964 187.448 232.96 187.448Z"
                fill="#623F33"
              />
              <path
                d="M186.646 401.123C221.819 383.382 248.732 353.523 264.989 314.755L259.999 312.174C257.171 310.711 253.856 312.129 252.589 315.209C234.175 359.949 202.627 380.753 182 390.519C161.373 380.754 129.825 359.949 111.412 315.208C110.145 312.128 106.829 310.711 104.002 312.173L99.0125 314.754C115.27 353.522 142.182 383.381 177.354 401.122L182 403.467L186.646 401.123Z"
                fill="#FAD24D"
              />
              <path
                d="M101.92 419.537C101.92 410.853 99.2218 402.416 94.2523 395.561L58.4538 346.181C57.0916 349.503 56.1042 353.026 55.6456 356.715L46.9769 426.472C45.2315 440.518 55.4163 453 68.6258 453H101.92V419.537Z"
                fill="black"
              />
              <path
                d="M262.08 419.537C262.08 410.853 264.778 402.416 269.748 395.561L305.546 346.181C306.908 349.503 307.896 353.026 308.354 356.715L317.023 426.472C318.768 440.518 308.584 453 295.374 453H262.08V419.537Z"
                fill="black"
              />
              <path
                d="M203.906 0C189.125 0 182.369 7.39736 182.033 7.77421C181.697 7.39736 174.941 0 160.16 0C119.893 0 30.485 59.5538 65.52 148.396L80.08 156.207C106.227 128.155 180.664 132.72 182.033 94.7842C183.401 132.72 257.838 128.155 283.986 156.207L298.546 148.396C333.581 59.5538 244.173 0 203.906 0Z"
                fill="#5D392E"
              />
              <path
                d="M160.16 0C119.893 0 30.485 59.5538 65.52 148.396V156.207H80.08C85.8239 150.044 93.9011 145.458 103.021 141.647C107.835 49.3027 154.419 0.651186 182 7.81033L182.021 7.76542C181.797 7.50865 175.07 0 160.16 0Z"
                fill="#5D392E"
              />
            </StyleSvg>

            <StyleMouth
              variants={mouth1}
              initial="hidden"
              animate="show"
              width="77"
              height="79"
              viewBox="0 0 77 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.5 27.7734C30.9203 27.7734 2.40625 40.3641 2.40625 40.3641C9.14375 48.8813 6.7375 61.1016 38.5 61.1016C67.0141 61.1016 66.4125 50.6094 74.5938 40.3641C74.5938 40.3641 46.0797 27.7734 38.5 27.7734Z"
                fill="#ED4C5C"
              />
              <path
                d="M38.5 25.4281L7.09844 38.5125C15.2797 48.7578 24.5438 44.8078 38.5 44.8078C52.4563 44.8078 61.6 48.6344 69.9016 38.5125L38.5 25.4281Z"
                fill="#60452B"
              />
              <path
                d="M70.3828 38.2656C70.3828 36.1672 56.9078 26.0453 38.5 26.0453C20.0922 26.0453 6.61719 36.0438 6.61719 38.2656H70.3828Z"
                fill="white"
              />
              <path
                d="M53.4188 18.3922C50.4109 17.4047 45.9594 17.8984 40.0641 20.3672C39.5828 20.6141 39.1016 20.7375 38.5 20.9844C38.0187 20.7375 37.4172 20.6141 36.9359 20.3672C31.0406 17.8984 26.5891 17.4047 23.5813 18.3922C14.6781 21.1078 2.40625 40.3641 2.40625 40.3641C9.98594 41.3516 19.8516 29.8719 38.5 29.8719C57.1484 29.8719 67.0141 41.3516 74.5938 40.3641C74.5938 40.3641 62.3219 21.1078 53.4188 18.3922Z"
                fill="#ED4C5C"
              />
            </StyleMouth>

            <StyleMouth2
              variants={mouth2}
              initial="hidden"
              animate="show"
              width="77"
              height="79"
              viewBox="0 0 85 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M83.8379 52.1207C83.0244 51.0967 81.4971 50.6996 80.6006 50.219C76.8154 48.1918 75.6201 45.7258 72.2666 42.7164C68.6475 39.4563 65.5928 35.2975 61.5752 32.7479C57.6572 30.2609 53.2744 29.8221 49.1074 31.5775C47.082 32.4344 45.1728 33.7092 43.3965 35.1721C42.8486 35.6318 42.1348 35.6945 41.5537 35.3184C39.8438 34.2107 36.5732 31.8283 35.9424 31.5775C26.1475 27.4606 20.0049 36.2379 12.7832 42.7164C9.42969 45.7258 8.21777 48.1918 4.44922 50.219C3.48633 50.7414 1.95898 51.0758 1.19531 52.0998C0.597656 52.894 0.614258 53.6045 0.614258 54.4195C0.614258 59.9367 12.0527 84.1789 42.4668 84.1789C72.8809 84.1789 84.3359 59.8531 84.3359 54.524C84.3359 54.1897 84.4023 52.8313 83.8379 52.1207Z"
                fill="#ED4C5C"
              />
              <path
                d="M2.70605 55.569C3.58594 55.6317 4.46582 55.6734 5.3623 55.569L8.01855 55.4227C8.89844 55.4018 9.77832 55.2764 10.6748 55.1928L13.3643 54.942C14.2607 54.8584 15.124 54.7121 16.0039 54.6076C16.8838 54.4822 17.7637 54.3986 18.627 54.2315C19.5068 54.0852 20.3701 53.9807 21.25 53.7717C22.1133 53.5836 22.9766 53.4164 23.8564 53.2074L26.4961 52.6014C27.3926 52.4133 28.3389 52.2252 29.3018 52.1207L30.0322 52.058L30.3975 52.0371L30.5801 52.0162H30.8789L32.2236 52.0998C32.4229 52.0998 32.7383 52.1834 33.0039 52.2461C33.2861 52.3088 33.5684 52.3924 33.8506 52.476C34.4316 52.6223 34.8467 52.894 35.3447 53.1029C35.8096 53.3328 36.208 53.5627 36.6396 53.7926L37.7852 54.3777L38.8975 54.7957C39.2793 54.9002 39.6611 54.9629 40.043 55.0465C40.4082 55.151 40.8232 55.151 41.2217 55.1719L41.8193 55.2137L42.1182 55.2346H42.3838C42.168 55.2764 42.8818 55.151 41.9023 55.3182L41.9355 55.2973L42.1514 55.2346L42.417 55.2137C43.0479 55.1719 44.2432 55.1719 44.9072 55.0256L45.9697 54.7957L47.082 54.3777L48.2275 53.8135C48.6592 53.5836 49.0576 53.3537 49.5225 53.1238C50.4521 52.6641 51.498 52.2879 52.5605 52.1416L54.1211 52.0371H54.3701L54.5361 52.058L54.8682 52.0789L55.5322 52.1416C56.3955 52.2252 57.5078 52.4342 58.3711 52.6223L61.0273 53.2074C61.9072 53.4373 62.7705 53.5836 63.6338 53.7717C64.4971 53.9807 65.377 54.0643 66.2568 54.2315C67.1367 54.3986 68.0166 54.4822 68.8965 54.6076C70.6562 54.8793 72.4326 55.0465 74.209 55.1928L75.5371 55.3391L75.8691 55.3809H75.9521H76.168L76.8486 55.4227L79.5381 55.569C80.4512 55.6734 81.3145 55.6108 82.1943 55.569C83.0908 55.569 83.1572 56.0496 82.2773 56.2795C81.3809 56.5512 80.4678 56.7811 79.5879 56.8856L76.915 57.2617L76.251 57.3453L76.085 57.3662L75.8857 57.3871L75.5537 57.408L74.209 57.5125C72.3994 57.617 70.5898 57.7006 68.7803 57.7006C67.8672 57.7215 66.9707 57.7006 66.0576 57.6379C65.1445 57.5752 64.2314 57.5543 63.3184 57.4498C61.5088 57.2826 59.6494 57.0109 57.9228 56.7184C57.0098 56.593 56.3291 56.4885 55.416 56.4467L54.7519 56.4258H54.1709L53.042 56.5721C52.6768 56.6348 52.3281 56.802 51.9795 56.8647C51.6309 56.9692 51.2656 57.199 50.9004 57.3453C50.5186 57.5334 50.1035 57.7842 49.7217 57.9932L48.3769 58.7037L46.916 59.2889C46.4014 59.4352 45.8701 59.5397 45.3389 59.6651C44.7744 59.8113 44.376 59.8113 43.9111 59.8531L43.2471 59.9158L42.915 59.9367L42.749 59.9576H42.5498L42.4668 59.9367L42.9648 59.8531L42.9316 59.874C41.9521 60.0412 42.6494 59.9158 42.4336 59.9576H42.3008L42.1182 59.9367L41.7529 59.9158L41.0225 59.8531C40.5244 59.8113 40.043 59.7904 39.5449 59.6442C39.0469 59.5188 38.5488 59.4352 38.0508 59.268L36.5898 58.6828L35.2451 57.9723C34.8467 57.7633 34.4316 57.5125 34.0664 57.3244C33.7178 57.1781 33.3193 56.9274 33.0205 56.8647C32.8711 56.8229 32.7051 56.7811 32.5557 56.7184C32.3896 56.6557 32.2734 56.593 32.0244 56.5721L30.6797 56.4049L29.5674 56.4258C28.7373 56.4467 27.9072 56.5721 27.0273 56.6975C25.3008 56.99 23.458 57.2617 21.6484 57.4289C20.7353 57.5334 19.8223 57.5543 18.9258 57.617C18.0127 57.6797 17.0996 57.7006 16.1865 57.6797C14.3604 57.7006 12.5674 57.617 10.7744 57.4916C9.89453 57.4289 8.96484 57.3871 8.06836 57.2408L5.3623 56.8647C4.46582 56.7602 3.56934 56.5303 2.67285 56.2586C1.74316 56.0287 1.79297 55.5481 2.70605 55.569Z"
                fill="#D32A2A"
              />
            </StyleMouth2>
          </motion.div>
          <StyledContainer
            variants={motionContent}
            initial="hidden"
            animate="show"
          >
            <p>
              If you want to know <b style={{ color: "#fad24d" }}> more</b>{" "}
              about me
            </p>

            <p>click here</p>
            <motion.button
              variants={motionButton}
              initial="hidden"
              animate="show"
              onClick={() => scrollTosection(sectionAbout)}
            >
              About me
            </motion.button>
          </StyledContainer>
          <StyledImg
            viewBox="0 0 1440 363"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
              strokeOpacity=".6"
              strokeWidth="12"
              stroke="#fad24d"
              variants={line}
              initial="hidden"
              animate="show"
            />
          </StyledImg>
        </StyledOverlayTalking>
      )}
      {fifthOverlayVisible && (
        <StyleOverlayYellow
          variants={motionOverlay5}
          initial="hidden"
          animate="show"
        ></StyleOverlayYellow>
      )}
      {sixthOverlayVisible && (
        <StyleOverlay
          variants={motionOverlay6}
          initial="hidden"
          animate="show"
        ></StyleOverlay>
      )}
    </>
  );
};
export default Overlay;

const StyleOverlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  line-height: 4rem;
  background-color: #1b1b1b;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fad24d;
  font-size: 2rem;
  @media (max-width: 900px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
  div {
    text-align: center;
  }
`;
const StyledOverlayTalking = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #1b1b1b;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  font-size: 2rem;

  button {
    background-color: #fad24d;
    color: black;
    font-weight: 500;
    border-radius: 1rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    cursor: pointer;
  }
`;
const StyleOverlayYellow = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #fad24d;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;
const StyleSvg = styled.svg`
  position: relative;
`;
const StyleMouth = styled(motion.svg)`
  position: absolute;
  bottom: 44%;
  left: 23%;
  @media (max-width: 1300px) {
    bottom: 44%;
    left: 21%;
  }
  @media (max-width: 1150px) {
    bottom: 44%;
    left: 20%;
  }
  @media (max-width: 1050px) {
    bottom: 44%;
    left: 19%;
  }
  @media (max-width: 1000px) {
    bottom: 44%;
    left: 18%;
  }

  @media (max-width: 907px) {
    bottom: 44%;
    left: 15%;
  }
  @media (max-width: 900px) {
    bottom: 44%;
    left: 16%;
  }
  @media (max-width: 800px) {
    bottom: 44%;
    left: 15%;
  }
  @media (max-width: 700px) {
    bottom: 44%;
    left: 16%;
  }
  @media (max-width: 650px) {
    bottom: 44%;
    left: 19%;
  }
  @media (max-width: 470px) {
    bottom: 44%;
    left: 26%;
  }
`;
const StyleMouth2 = styled(motion.svg)`
  position: absolute;
  bottom: 44%;
  left: 23%;
  @media (max-width: 1300px) {
    bottom: 44%;
    left: 21%;
  }
  @media (max-width: 1150px) {
    bottom: 44%;
    left: 20%;
  }
  @media (max-width: 1000px) {
    bottom: 44%;
    left: 18%;
  }
  @media (max-width: 1050px) {
    bottom: 44%;
    left: 19%;
  }

  @media (max-width: 907px) {
    bottom: 44%;
    left: 15%;
  }
  @media (max-width: 900px) {
    bottom: 44%;
    left: 16%;
  }
  @media (max-width: 800px) {
    bottom: 44%;
    left: 15%;
  }
  @media (max-width: 700px) {
    bottom: 44%;
    left: 16%;
  }
  @media (max-width: 650px) {
    bottom: 44%;
    left: 19%;
  }
  @media (max-width: 470px) {
    bottom: 44%;
    left: 26%;
  }
`;
const StyledContainer = styled(motion.div)`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
`;
const StyledImg = styled(motion.svg)`
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
`;
