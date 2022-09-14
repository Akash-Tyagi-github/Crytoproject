import React from "react";
import "./Thirdcomp.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { border, borderBottom, textAlign } from "@mui/system";
import { TableFooter } from "@mui/material";
import Pagination from "./Pagination.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";

const Thirdcomp = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const datafromstore=useSelector((state)=>state)
  console.log("3rdcompStoredata:",datafromstore.a.data);
  const newdata=(datafromstore.a.data)?.slice(0,50);
  console.log("new:",newdata);
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = props?.data?.slice(indexOfFirstPost, indexOfLastPost);
  const currentPosts = newdata?.slice(indexOfFirstPost, indexOfLastPost);
console.log(currentPosts);
  // Change page
  const paginate = (pageNumber) => {
    console.log("clicked");
    setCurrentPage(pageNumber);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const NewTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // color: theme.palette.common.white,
      color: "white",
      minWidth: "1rem",
      maxwidth: "1rem",

      marginBottom: "1rem",
      fontSize: "2rem",
      // border: ".1rem solid green",
      textAlign: "center",
      fontWeight: "600",
      backgroundColor: "#242526",
      padding: "2rem",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "1.5rem",
      color: "white",
      backgroundColor: "black",
      textAlign: "center",
      // borderBottom: "0.1rem solid white",
      border: "0.1rem solid white",
      // padding:"1.5rem",
   
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const NewTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    textAlign: "center",
  }));

  // console.log("third comp prop:", props?.data);
  // console.log(props?.data?.length);

 
  return (
    <>
      <div className="thirdcomp">
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 700, border: "0.1rem solid grey" }}
            aria-label="customized table"
          >
            <TableHead>
              <NewTableRow>
                <NewTableCell>#</NewTableCell>
                <NewTableCell>Coin</NewTableCell>
                <NewTableCell>Price</NewTableCell>
                <NewTableCell>24h</NewTableCell>
                <NewTableCell>Volume</NewTableCell>
                <NewTableCell>Market Cap</NewTableCell>
              </NewTableRow>
            </TableHead>
            <TableBody>
              {/* {props?.data?.map((elem, id) => { */}
              {currentPosts?.map((elem, id) => {
                let num = elem.price_change_24h;
                // let newnum=Number(num).toFixed(2);
                // console.log("cap:", elem.market_cap);
                return (
                  <NewTableRow key={id}>
                    <NewTableCell>{id + 1}</NewTableCell>
                    <NewTableCell>{elem.name}</NewTableCell>
                    <NewTableCell>
                      {Number(elem.current_price).toFixed(2)}
                    </NewTableCell>
                    <NewTableCell>{Number(num).toFixed(2)}</NewTableCell>
                    <NewTableCell>{elem.total_volume}</NewTableCell>
                    <NewTableCell>{elem.market_cap}</NewTableCell>
                  </NewTableRow>
                );
              })}
            </TableBody>
          </Table>
          {/* <Pagination 
          size="large" sx={{display:"flex",justifyContent:"center",
       }}/> */}
        </TableContainer>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={newdata?.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Thirdcomp;
