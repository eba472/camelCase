import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface member {
  id: number;
  name: string;
  discord: string;
  leetcode: string;
  linkedin: string;
  hobby: string[];
}
const membersData: member[] = [
  {
    id: 1,
    name: 'Eba',
    discord: 'Eba472',
    leetcode: 'Eba472',
    linkedin: 'eba472',
    hobby: [],
  },
  {
    id: 2,
    name: 'Tseso',
    discord: 'Tseso',
    leetcode: 'tserensodnom',
    linkedin: 'tses0',
    hobby: [],
  },
  {
    id: 3,
    name: 'Buya',
    discord: 'Buya',
    leetcode: 'buyanjargal',
    linkedin: 'buya923',
    hobby: [],
  },
  {
    id: 4,
    name: 'Khoso',
    discord: 'XOC',
    leetcode: 'xoc',
    linkedin: 'khosbayar-batsukh-76b378240',
    hobby: [],
  },
  {
    id: 5,
    name: 'Anuul',
    discord: 'Teiishi',
    leetcode: 'Ankn99',
    linkedin: 'anuul-a',
    hobby: [],
  },
  {
    id: 6,
    name: 'Jagaa',
    discord: 'jagaa',
    leetcode: '',
    linkedin: 'jargalsaikhanartag',
    hobby: [],
  },
  {
    id: 7,
    name: 'Uunuu',
    discord: 'unuu',
    leetcode: '',
    linkedin: 'unubold-erdenebeleg-645b28219',
    hobby: [],
  },
  {
    id: 8,
    name: 'Bazu',
    discord: 'buzz',
    leetcode: 'bazuunaa',
    linkedin: 'batzaya-byambasuren-b40bb6148',
    hobby: [],
  },
  {
    id: 9,
    name: 'Anuka',
    discord: 'Anuka',
    leetcode: '',
    linkedin: 'anudari-chingunbat',
    hobby: [],
  },
  {
    id: 10,
    name: 'Uchral',
    discord: 'dchular',
    leetcode: '',
    linkedin: 'uchral-davaajargal-180786131',
    hobby: [],
  },
  {
    id: 11,
    name: 'Saruul',
    discord: 'sadjyagaimo',
    leetcode: '',
    linkedin: '',
    hobby: [],
  },
];

export default function MembersTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>DiscordID</TableCell>
            <TableCell align='left'>Hobby</TableCell>
            <TableCell align='left'>Leetcode</TableCell>
            <TableCell align='left'>Linkedin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {membersData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell align='left'>{row.name}</TableCell>
              <TableCell align='left'>{row.discord}</TableCell>
              <TableCell align='left'>{row.hobby}</TableCell>
              <TableCell align='left'>
                {row.leetcode && (
                  <a
                    style={{ textDecoration: 'none', color: 'red' }}
                    href={`https://leetcode.com/${row.leetcode}/`}
                  >
                    Click
                  </a>
                )}
              </TableCell>
              <TableCell align='left'>
                {row.linkedin && (
                  <a
                    style={{ textDecoration: 'none', color: 'blue' }}
                    href={`https://www.linkedin.com/in/${row.linkedin}/`}
                  >
                    Click
                  </a>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
