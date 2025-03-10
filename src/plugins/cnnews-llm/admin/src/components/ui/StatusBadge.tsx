import { Typography } from '@strapi/design-system';
import { TaskStep, StepStatus } from '../../types/task'

// border: 1px solid #000;
// padding: 4px 8px 4px 8px;
// border-radius: 100px;
// text-transform: uppercase;
// font-size: 12px;
// font-weight: 500;

const getStatusText = (status: StepStatus) => {
  switch (status) {
    case 'init': return 'started';
    case 'inProgress': return 'in progress';
    case 'success': return 'success';
    case 'error': return 'error';
    default: return 'unknown';
  }
}

const getStatusColors = (status: StepStatus) => {
  switch (status) {
    case 'init': return ['rgb(107 114 128 / 1)', 'rgb(243 244 246 / 1)'];
    case 'inProgress': return ['rgb(249 115 22 / 1)', 'rgb(255 237 213 / 1)'];
    case 'success': return ['rgb(34 197 94 / 1)', 'rgb(220 252 231 / 1)'];
    case 'error': return ['rgb(239 68 68 / 1)', 'rgb(254 226 226 / 1)'];
    default: return ['#000', '#000'];
  }
}

const StatusBadge = ({ status }: { status: StepStatus }) => {
  const [fgColor, bgColor] = getStatusColors(status)
  const style = {
    border: `1px solid ${fgColor}`,
    color: fgColor,
    backgroundColor: bgColor,
    padding: '4px 8px 4px 8px',
    borderRadius: '100px',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: 500,
  }
  return (
    <Typography style={style}>{getStatusText(status)}</Typography>
  )
}

export { StatusBadge };
