import { Icon } from "@chakra-ui/icons";

export const StoryIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.998 6.917c.68-2.686 3.25-4.058 8.848-4.083a.678.678 0 0 1 .68.68v12.252a.681.681 0 0 1-.68.68c-5.445 0-7.549 1.098-8.848 2.723m0-12.252c-.681-2.686-3.252-4.058-8.849-4.083a.678.678 0 0 0-.68.68v12.17c0 .42.26.762.68.762 5.445 0 7.557 1.106 8.849 2.723m0-12.252V19.17"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.11.11h21.78v21.78H.11z" />
      </clipPath>
    </defs>
  </svg>
);
