interface Breakpoints {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

interface Device {
  mobile: string;
  tablet: string;
  laptop: string;
  desktop: string;
}

const breakpoints: Breakpoints = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

const device: Device = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  tablet: `(max-width: ${breakpoints.tablet})`,
  laptop: `(max-width: ${breakpoints.laptop})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
};

export default device;
