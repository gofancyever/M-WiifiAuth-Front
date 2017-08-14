<template>
    <div>
        <el-row>
            <div class="block">
                <el-carousel height="250px">
                    <el-carousel-item v-for="item in items" :key="item">
                        <img v-bind:src='item'>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </el-row>

        <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="date" label="日期">
            </el-table-column>
            <el-table-column prop="name" label="剧名">
            </el-table-column>
            <el-table-column prop="address" label="厅号">
            </el-table-column>
        </el-table>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                items:[
                    'http://www.btdjy.cn/Public/Uploads/image/slide/9.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/slide/10.jpg',
                    'http://www.btdjy.cn/Public/Uploads/image/slide/12.jpg',
                ],
                tableData2: [{
                    date: '2017-08-06 20:00',
                    name: '8.6斗琴-爵士钢琴VS古典钢琴巅峰对决',
                    address: '1号',
                }, {
                    date: '22017-08-06 20:00',
                    name: '	魔幻泡泡秀《爱丽丝梦游泡泡仙境》',
                    address: '1号'
                }, {
                    date: '2017-08-06 20:00',
                    name: '	8.13 《奇幻魔法学校》',
                    address: '1号',
                }, {
                    date: '2017-08-06 20:00',
                    name: '	魔幻泡泡秀《爱丽丝梦游泡泡仙境》',
                    address: '1号'
                }]
            }
        }
    }

</script>
<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .cell {
        text-align: center;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>