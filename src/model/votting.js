//client
export const categories = [
  'President',
  'Governor',
  'Senator',
  'Member of Parliament',
  'Member of County Assembly'
];

export const candidateDetails = [
  // President
  {
    id: 1,
    position: "President",
    full_name: "Johnathan Doe",
    party: "Liberty Party",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },
  {
    id: 2,
    position: "President",
    full_name: "Alice Brown",
    party: "Progressive Union",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },

  // Governor
  {
    id: 3,
    position: "Governor",
    full_name: "Emily Smith",
    party: "Liberty Party",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },
  {
    id: 4,
    position: "Governor",
    full_name: "Sophia Martinez",
    party: "People's Voice",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },

  // Senator
  {
    id: 5,
    position: "Senator",
    full_name: "Michael Johnson",
    party: "Progressive Union",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },
  {
    id: 6,
    position: "Senator",
    full_name: "David Wilson",
    party: "People's Voice",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },

  // Member of Parliament
  {
    id: 7,
    position: "Member of Parliament",
    full_name: "Sarah Thompson",
    party: "Liberty Party",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },
  {
    id: 8,
    position: "Member of Parliament",
    full_name: "James Anderson",
    party: "Progressive Union",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },

  // Member of County Assembly
  {
    id: 9,
    position: "Member of County Assembly",
    full_name: "Olivia White",
    party: "People's Voice",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  },
  {
    id: 10,
    position: "Member of County Assembly",
    full_name: "Benjamin Clark",
    party: "Liberty Party",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826"
  }
];


const votingRequestBody = {
  id: 1,
  position: "Governor",
  full_name: "Sophia Martinez",
  party: "People's Voice",
}

const registerBody = {//registration body
  username: "peter",
  email: "peter@gmail.com",
  password: "peter",
  confirm_password: "peter",
}
const login = {//login body
  username: "peter",
  email: "peter@gmail.com",
}

//admin
const candidateUploadBody = {//voting request body
  position: "Governor",
  full_name: "Sophia Martinez",
  party: "People's Voice",
  img_url: "https://example.com/sophia_martinez.jpg"
}

export const votesCount = [
  {
    position: "Governor",
    full_name: "Sophia Martinez",
    party: "People's Voice",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826",
    voteCount: 34
  },
  {
    position: "Governor",
    full_name: "Sophia Martinez",
    party: "People's Voice",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826",
    voteCount: 34
  },
  {
    position: "Governor",
    full_name: "Sophia Martinez",
    party: "People's Voice",
    img_url: "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg?t=st=1742915834~exp=1742919434~hmac=68e7baec99d8cea311f43d1f7a8067f2121a205d1d31fbfdbf4f726cd3f21d1e&w=826",
    voteCount: 34
  },
]
