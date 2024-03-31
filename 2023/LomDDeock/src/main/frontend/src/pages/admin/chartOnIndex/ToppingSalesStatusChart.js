import { ResponsivePie } from '@nivo/pie';

/* 토핑 매출현황 그래프 */
const ToppingSalesStatusChart = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 30, right: 20, bottom: 40, left: 20 }}
        valueFormat=" >-,d"
        sortByValue={true}
        innerRadius={0.5}
        cornerRadius={5}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'oranges' }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        arcLinkLabelsSkipAngle={0}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: '중국당면'
                },
                id: 'lines'
            },
            {
                match: {
                    id: '우삼겹'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '치즈'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '치즈떡'
                },
                id: 'dots'
            },
            {
                match: {
                    id: '우동면'
                },
                id: 'lines'
            }
        ]}
    />
)

export default ToppingSalesStatusChart;