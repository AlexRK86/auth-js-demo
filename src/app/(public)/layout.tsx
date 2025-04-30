import { FC } from "react";
import { Box } from "@mui/material";

const PublicLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  
  return (
    <Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default PublicLayout;
