import { ResponsiveBar } from '@nivo/bar';

/* 메뉴 매출현황 그래프 */
const MenuSalesStatusChart = ({data})=>(
    <ResponsiveBar
        data={data}
        keys={[
            '오징어튀김',
            '○○떡볶이',
            '새우튀김',
            '△△떡볶이',
            '★★세트',
            '♧♧떡볶이'
        ]}
        indexBy="month-day"
        margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat=" >-,.0d"
        colors={{ scheme: 'oranges' }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: '새우튀김'
                },
                id: 'lines'
            }
        ]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0
        }}
        axisLeft={{
            format: " >-,.0d",
            tickSize: 0,
            tickPadding: 5,
            tickRotation: 0
        }}
        labelSkipWidth={10}
        labelSkipHeight={200}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
)

export default MenuSalesStatusChart;