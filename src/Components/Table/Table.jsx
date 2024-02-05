/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import MUITable from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EDEDED",
    color: "#3C3C3C",
    fontWeight: 700,
    textAlign: "left",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: "left",
  },
}));

export default function Table({ headers = [], children }) {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers?.map((header, ind) => (
              <StyledTableCell key={ind} align="right">
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        {children}
      </MUITable>
    </TableContainer>
  );
}
