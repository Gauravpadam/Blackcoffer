import PropTypes from 'prop-types';
import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  LinearProgress,
  Stack,
  SvgIcon,
  Typography
} from '@mui/material';
import { useJsonData } from 'src/contexts/jsonDataContext';

export const OverviewTasksProgress = (props) => {
  const { sx } = props;
  const jsonData = useJsonData()

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              gutterBottom
              variant="overline"
            >
              Likelihood
            </Typography>
            <Typography variant="h4">
              {jsonData[0].likelihood}%
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <ChartBarIcon/>
            </SvgIcon>
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewTasksProgress.propTypes = {
  value: PropTypes.number.isRequired,
  sx: PropTypes.object
};
