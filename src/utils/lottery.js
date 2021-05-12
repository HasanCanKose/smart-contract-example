import web3 from "./web3";

const address = "0x369e25129196adf9c4c7a8d4aa4a459a32aca3a1";

const abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "packagemapping",
    outputs: [
      {
        name: "isuidgenerated",
        type: "bool",
      },
      {
        name: "itemId",
        type: "uint256",
      },
      {
        name: "itemName",
        type: "string",
      },
      {
        name: "transitStatus",
        type: "string",
      },
      {
        name: "orderStatus",
        type: "uint256",
      },
      {
        name: "customer",
        type: "address",
      },
      {
        name: "orderTime",
        type: "uint256",
      },
      {
        name: "carrier1",
        type: "address",
      },
      {
        name: "carrier1Time",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "carriers",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_itemid",
        type: "uint256",
      },
      {
        name: "_itemName",
        type: "string",
      },
    ],
    name: "orderIitem",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_uniqueId",
        type: "address",
      },
    ],
    name: "cancelOrder",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_uniqueId",
        type: "address",
      },
      {
        name: "_transitStatus",
        type: "string",
      },
    ],
    name: "carrier1Report",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_carrierAddress",
        type: "address",
      },
    ],
    name: "manageCarriers",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export default new web3.eth.Contract(abi, address);
