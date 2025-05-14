import { Severity } from '@/types/semgrep';
import * as S from './styles';
import { CSSProperties } from 'styled-components';

interface ChartContent {
  severity: Severity;
  count: number;
  color: CSSProperties['color'];
}

interface SeverityChartProps {
  contents: ChartContent[];
}

const RADIUS = 55;
const STROKE_WIDTH = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// 라벨에 표시할 최소 각도 (이 각도 미만이면 count만 표시)
const MIN_ANGLE_FOR_FULL_LABEL = 40;

const SeverityChart = ({ contents }: SeverityChartProps) => {
  const total = contents.reduce((acc, cur) => acc + cur.count, 0);

  // offset: 도넛의 각 구간의 시작 위치 (strokeDashoffset 계산용)
  let offset = 0;
  // 현재까지 누적된 각도 (라벨 위치 계산용)
  let currentAngle = 0;

  return (
    <S.ChartWrapper>
      <svg width="250" height="250" viewBox="0 0 160 160" style={{ overflow: 'visible' }}>
        {/* 차트를 12시 방향부터 시계 방향으로 돌리기 위해 -90도 회전 */}
        <g transform="rotate(-90 80 80)">
          {contents.map((item, index) => {
            // 항목의 비율로 해당 구간의 각도와 둘레 길이를 계산
            const ratio = item.count / total;
            const dash = CIRCUMFERENCE * ratio;
            const dashArray = `${dash} ${CIRCUMFERENCE - dash}`;
            const dashOffset = offset;
            offset -= dash;

            // 라벨의 위치 계산
            const angle = ratio * 360;
            const midAngle = currentAngle + angle / 2;
            currentAngle += angle;

            const radians = (midAngle * Math.PI) / 180;
            const labelX = 80 + RADIUS * Math.cos(radians);
            const labelY = 80 + RADIUS * Math.sin(radians);

            // 항목이 차지하는 각도가 임계치보다 작으면 count만 표시
            const labelText =
              angle < MIN_ANGLE_FOR_FULL_LABEL
                ? item.count === 0
                  ? ''
                  : `${item.count}`
                : `${item.severity}, ${item.count}`;

            return (
              <g key={index}>
                <circle
                  cx="80"
                  cy="80"
                  r={RADIUS}
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth={STROKE_WIDTH}
                  strokeDasharray={dashArray}
                  strokeDashoffset={dashOffset}
                />
                <text
                  x={labelX}
                  y={labelY}
                  fontSize="10"
                  fill={item.severity === 'CRITICAL' || item.severity === 'ERROR' ? 'white' : 'black'}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  transform={`rotate(90, ${labelX}, ${labelY})`}
                >
                  {labelText}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </S.ChartWrapper>
  );
};

export default SeverityChart;
