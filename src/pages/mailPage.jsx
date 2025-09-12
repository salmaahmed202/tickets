import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
  TextField,
} from "@mui/material";
import { useState } from "react";

const mails = [
  {
    id: 1,
    name: "Rasha",
    subject:
      "The end of the year is upon us. As you relax and reflect on the past year, take a moment to catch up on",
    date: "2022-12-11 12:24 AM",
  },
  {
    id: 2,
    name: "Rasha",
    subject:
      "Another email for testing filter function",
    date: "2023-03-01 09:15 AM",
  },
  {
    id: 3,
    name: "Rasha",
    subject:
      "Final test mail for filtering",
    date: "2023-08-20 05:40 PM",
  },
];

export default function MailPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [fromDate, setFromDate] = useState("2022-01-01");
  const [toDate, setToDate] = useState("2023-12-31");

  const handleCheckboxChange = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleNameClick = (mail) => {
    navigate(`/maildetials/${mail.id}`, { state: mail });
  };


  const filteredMails = mails.filter((mail) => {
    const mailDate = new Date(mail.date.split(" ")[0]); 
    return (
      (!fromDate || mailDate >= new Date(fromDate)) &&
      (!toDate || mailDate <= new Date(toDate))
    );
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Welcome to #1 ticket management platform in Egypt.
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#00A099",
            fontSize: "16px",
            padding: "10px 20px",
          }}
          onClick={() => navigate("/newmail")}
        >
          New Email
        </Button>
      </Box>
      <Box
        sx={{
          bgcolor: "white",
          border: "1px solid #E0E0E0",
          borderRadius: "8px",
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Email
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                From
              </Typography>
              <TextField
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                size="small"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                To
              </Typography>
              <TextField
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                size="small"
              />
            </Box>
          </Box>
        </Box>

      
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            bgcolor: "#F1EEEE",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            p: "10px 30px",
          }}
        >
          <Typography sx={{ flex: 1, color: "#818181", fontSize: "14px" }}>
            Name
          </Typography>
          <Typography sx={{ flex: 8, color: "#818181", fontSize: "14px" }}>
            Subject
          </Typography>
          <Typography sx={{ color: "#818181", fontSize: "14px" }}>
            Date/Time
          </Typography>
        </Box>

        <Table>
          <TableBody>
            {filteredMails.map((mail) => {
              const isChecked = selected.includes(mail.id);
              return (
                <TableRow key={mail.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(mail.id)}
                      sx={{
                        color: isChecked ? "red" : undefined,
                        "&.Mui-checked": {
                          color: "red",
                        },
                      }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "#6E6B7B",
                      cursor: "pointer",
                      "&:hover": { color: "blue" },
                    }}
                    onClick={() => handleNameClick(mail)}
                  >
                    {mail.name}
                  </TableCell>
                  <TableCell sx={{ color: "#6E6B7B" }}>
                    {mail.subject}
                  </TableCell>
                  <TableCell sx={{ color: "#6E6B7B", whiteSpace: "pre-line" }}>
                    {mail.date.split(" ")[0]} <br />
                    {mail.date.split(" ").slice(1).join(" ")}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      
        {filteredMails.length === 0 && (
          <Typography
            variant="body2"
            sx={{ textAlign: "center", mt: 2, color: "gray" }}
          >
            No emails found in this date range.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
