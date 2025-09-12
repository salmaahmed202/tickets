import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import RightArrow from "../assets/Vector.svg";
import LeftArrow from "../assets/Left.svg";
import TrashIcon from "../assets/Trash.svg";
import UploadIcon from "../assets/upload.svg";

export default function MailDetials() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();


  const mail = state || {
    name: "Unknown",
    subject: "No subject available",
    date: "N/A",
    content: "No content available",
  };

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      
      <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold", fontSize: { xs: "1.1rem", sm: "1.25rem" } }}>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
        Welcome to #1 ticket management platform in Egypt.
      </Typography>

      
      <Box
        sx={{
          bgcolor: "white",
          p: { xs: 2, sm: 3 },
          borderRadius: "8px",
          border: "1px solid #E0E0E0",
        }}
      >
        
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // stack on mobile
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            mb: 2,
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "gray", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
            {mail.name} &lt;RASDFDI.ai&gt;
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: { xs: 1, sm: 0 } }}>
            <Typography variant="caption" color="text.secondary" sx={{ fontSize: { xs: "0.7rem", sm: "0.75rem" } }}>
              {mail.date}
            </Typography>
            <img src={UploadIcon} alt="upload" style={{ width: "12px", height: "14px" }} />
            <img src={TrashIcon} alt="trash" style={{ width: "18px", height: "18px" }} />
            <img src={RightArrow} alt="next" style={{ width: "10px", height: "14px" }} />
          </Box>
        </Box>

       
        <Typography variant="body1" sx={{ fontSize: { xs: "0.95rem", sm: "1rem" }, mb: 1 }}>
          {mail.subject}
        </Typography>

       
        <Typography
          variant="body2"
          sx={{
            whiteSpace: "pre-line",
            mb: 3,
            fontSize: { xs: "0.85rem", sm: "0.9rem" },
          }}
        >
          {mail.content || mail.subject}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<img src={RightArrow} alt="reply" style={{ width: "18px", height: "18px" }} />}
            sx={{
              border: "1px solid #717579",
              px: { xs: 2, sm: 5 },
              py: { xs: 1, sm: 1.5 },
              color: "black",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              width: { xs: "100%", sm: "auto" }, 
            }}
            onClick={() => navigate(-1)}
          >
            Reply
          </Button>

          <Button
            variant="outlined"
            startIcon={<img src={LeftArrow} alt="forward" style={{ width: "18px", height: "18px" }} />}
            sx={{
              border: "1px solid #717579",
              px: { xs: 2, sm: 5 },
              py: { xs: 1, sm: 1.5 },
              color: "black",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              width: { xs: "100%", sm: "auto" },
            }}
            onClick={() => navigate(-1)}
          >
            Forward
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
