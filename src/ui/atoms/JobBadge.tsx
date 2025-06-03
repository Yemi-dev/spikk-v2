import { colors } from "@/constants/colors";
import React from "react";

const JobBadge = ({ children, color }: { children: React.ReactNode; color?: string }) => (
  <span
    className='inline-block text-xs font-semibold px-2 py-1 rounded mr-2 mb-1'
    style={{ backgroundColor: color || colors.bgPurpleLight, color: colors.textDark }}>
    {children}
  </span>
);

export default JobBadge;
