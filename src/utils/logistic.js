import web3 from "./web3";

// const address = "0x369e25129196adf9c4c7a8d4aa4a459a32aca3a1";

const address = "0x1a89e8d3637b8B9f23DC1aB737E840eb7e2A449D";

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
        type: "string",
      },
      {
        name: "itemName",
        type: "string",
      },
      {
        name: "itemType",
        type: "string",
      },
      {
        name: "itemWeight",
        type: "string",
      },
      {
        name: "transitStatus",
        type: "string",
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
        name: "carrier",
        type: "address",
      },
      {
        name: "carrierTime",
        type: "uint256",
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
        name: "_uniqueId",
        type: "address",
      },
      {
        name: "_transitStatus",
        type: "string",
      },
    ],
    name: "carrierReport",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "_itemId",
        type: "string",
      },
      {
        name: "_itemName",
        type: "string",
      },
      {
        name: "_itemType",
        type: "string",
      },
      {
        name: "_itemWeight",
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
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
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
    constant: true,
    inputs: [],
    name: "package",
    outputs: [
      {
        name: "isuidgenerated",
        type: "bool",
      },
      {
        name: "itemId",
        type: "string",
      },
      {
        name: "itemName",
        type: "string",
      },
      {
        name: "itemType",
        type: "string",
      },
      {
        name: "itemWeight",
        type: "string",
      },
      {
        name: "transitStatus",
        type: "string",
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
        name: "carrier",
        type: "address",
      },
      {
        name: "carrierTime",
        type: "uint256",
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
