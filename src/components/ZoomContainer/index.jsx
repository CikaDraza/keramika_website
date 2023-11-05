import * as React from "react";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";

export default function ZoomContainer({ index, children }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  React.useEffect(() => {
    handleChange();
  }, []);

  return (
    <Box sx={{ height: "100%", widht: "100%", padding: 0 }}>
      <Box sx={{ display: "flex", widht: "100%", padding: 0 }}>
        <Zoom
          key={index}
          in={checked}
          style={{
            transitionDelay: checked ? index * 500 + "ms" : "0ms",
            widht: "100%"
          }}
        >
          {children}
        </Zoom>
      </Box>
    </Box>
  );
}
