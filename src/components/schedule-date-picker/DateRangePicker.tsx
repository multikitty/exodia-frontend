import {
  Paper,
  Stack,
  Dialog,
  Button,
  DialogContent,
  FormHelperText,
  Typography,
  Divider,
  TextField,
  Box,
} from '@mui/material';
import { CalendarPicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';

import useResponsive from '@hooks/useResponsive';
import { DateRangePickerProps } from './types';

export default function DateRangePicker({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  open,
  onClose,
  onSubmit,
  isError,
}: DateRangePickerProps) {
  const isDesktop = useResponsive('up', 'md');
  const isCalendarView = true;

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { maxWidth: 'fit-content', width: 'fit-content' } }}
    >
      <DialogContent
        sx={{
          ...(isCalendarView &&
            isDesktop && {
              overflow: 'unset',
            }),
        }}
      >
        <div>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Stack direction="column" spacing={2} pt={3}>
              <Typography variant="body1">Today</Typography>
              <Typography variant="body1">Yesterday</Typography>
              <Typography variant="body1">This week</Typography>
              <Typography variant="body1">Last week</Typography>
              <Typography variant="body1">This month</Typography>
              <Typography variant="body1">Last month</Typography>
              <Typography variant="body1">This year</Typography>
              <Typography variant="body1">Last year</Typography>
              <Typography variant="body1">All time</Typography>
            </Stack>

            <Divider component="div" orientation="vertical" sx={{ height: 'auto' }} />

            <Stack direction="column">
              <Stack
                spacing={1}
                direction={isCalendarView && isDesktop ? 'row' : 'column'}
                justifyContent="center"
                sx={{
                  pt: 1,
                  '& .MuiCalendarPicker-root': {
                    ...(!isDesktop && {
                      width: 'auto',
                    }),
                  },
                }}
              >
                <Paper variant="outlined" sx={{ border: 'none' }}>
                  <CalendarPicker date={startDate} onChange={onChangeStartDate} />
                </Paper>

                <Divider component="div" orientation="vertical" />

                <Paper variant="outlined" sx={{ border: 'none' }}>
                  <CalendarPicker date={endDate} onChange={onChangeEndDate} />
                </Paper>
              </Stack>

              <Divider component="div" orientation="horizontal" />

              {isError && (
                <FormHelperText error sx={{ px: 2 }}>
                  End date must be later than start date
                </FormHelperText>
              )}

              <Stack direction="row" justifyContent="space-between" padding="16px">
                <Stack direction="row" alignItems="center" spacing={2}>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Start date"
                    sx={{ maxWidth: '128px' }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={startDate ? format(startDate, 'dd MMM yyyy') : ''}
                  />
                  <Box component="div">-</Box>
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="End date"
                    sx={{ maxWidth: '128px' }}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={endDate ? format(endDate, 'dd MMM yyyy') : ''}
                  />
                </Stack>

                <Stack direction="row" spacing={2}>
                  <Button variant="outlined" color="inherit" onClick={onClose}>
                    Cancel
                  </Button>

                  <Button disabled={isError} variant="contained" onClick={onSubmit}>
                    Schedule
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// const StyledCalendarPicker = styled(CalendarPicker)(({ theme }) => ({
//   '& .MuiPickersCalendarHeader-root': {
//     position: 'relative',
//   },
//   '& .MuiPickersCalendarHeader-labelContainer': {
//     position: 'absolute',
//     left: '50%',
//     transform: 'translate(-40%, 0)'
//   },
//   '& .MuiPickersArrowSwitcher-root': {
//     display: 'flex',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
// }));
