import React, { useMemo } from 'react';
import {
  Card,
  TableContainer,
  Paper,
  Stack,
  Typography,
  Chip,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import PersonAvatar from '@components/avatar/PersonAvatar';
import PlusIcon from '@components/icons/Plus';
import CardTable, { CardTableColumn } from '@components/table/CardTable';
import CustomTable from '@components/table/Table';
import Pencil from '@components/icons/Pencil';

import AddTeamMember from './AddTeamMember';
import EditTeamMember from './EditTeamMember';
import InviteSentDialog from './InviteSentDialog';

export type TeamMember = {
  name: string;
  email: string;
  access: string;
};

type Props = {
  teamMembers: TeamMember[];
};

export default function TeamMembers({ teamMembers }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [openAddMember, setOpenAddMember] = React.useState(false);
  const [openEditMember, setOpenEditMember] = React.useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = React.useState(false);

  const columns = useMemo(
    () =>
      [
        isMobile
          ? {
              id: 'name',
              render: (row: TeamMember) => (
                <Stack direction="row" justifyContent="space-between" sx={{ padding: '12px 16px' }}>
                  {row.name ? <PersonAvatar name={row.name} /> : <Typography>Empty</Typography>}
                  <IconButton onClick={() => setOpenEditMember(true)}>
                    <Pencil />
                  </IconButton>
                </Stack>
              ),
            }
          : {
              id: 'name',
              label: 'name',
              render: (row: TeamMember) => (
                <>{row.name ? <PersonAvatar name={row.name} /> : <Typography>Empty</Typography>}</>
              ),
            },
        {
          id: 'email',
          label: 'Email',
          render: (row: TeamMember) => <Typography>{row.email}</Typography>,
        },
        {
          id: 'access',
          label: 'Access',
          render: (row: TeamMember) => <Chip label={row.access.toUpperCase()} />,
        },
        !isMobile && {
          id: 'action',
          label: ' ',
          render: (row: TeamMember) => (
            <IconButton onClick={() => setOpenEditMember(true)}>
              <Pencil />
            </IconButton>
          ),
        },
      ].filter(Boolean) as CardTableColumn[],
    [isMobile, setOpenEditMember]
  );

  const handleAddTeamMember = () => {
    setOpenAddMember(false);
    setTimeout(() => setOpenSuccessDialog(true), 500);
  };

  const handleEditTeamMember = () => {
    setOpenEditMember(false);
  };

  return (
    <>
      {isMobile ? (
        <CardTable columns={columns} dataSource={teamMembers} divider />
      ) : (
        <Card sx={{ padding: '24px' }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">
                Team Members <Chip label="6" />
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<PlusIcon />}
                onClick={() => setOpenAddMember(true)}
              >
                Add member
              </Button>
            </Stack>
            <TableContainer component={Paper}>
              <CustomTable columns={columns} dataSource={teamMembers} sx={{ minWidth: 700 }} />
            </TableContainer>
          </Stack>
        </Card>
      )}
      <AddTeamMember open={openAddMember} isMobile={isMobile} onClose={handleAddTeamMember} />
      <EditTeamMember open={openEditMember} isMobile={isMobile} onClose={handleEditTeamMember} />
      <InviteSentDialog
        open={openSuccessDialog}
        isMobile={isMobile}
        onClose={() => setOpenSuccessDialog(false)}
      />
    </>
  );
}
