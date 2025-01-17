import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { Order } from '../../models/order.entity';
import { OrderService } from '../../services/order/order.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import salesConstants from '../../../constants/sales.constants';
import { Request } from 'express';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Auth } from '../../../auth/decorators/auth.decorator';
import { ADMIN_ROLES } from '../../../auth/constants/roles.constants';

@ApiTags('Orders')
@ApiBearerAuth()
@Controller('/api/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('total-amount-by-customer')
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Get total amount of orders group by customer', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiResponse({
    status: 200,
    description: 'Get an array with sum of all orders grouped by customer',
    schema: {
      example: [
        {
          custCode: 'C00001',
          totalOrdAmount: '3000.00',
        },
        {
          custCode: 'C00002',
          totalOrdAmount: '3500.00',
        },
      ],
    },
  })
  async totalAmoutByCustomer() {
    return await this.orderService.totalAmountByCustomer();
  }

  @Get('total-amount-by-agent')
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Get total amount of orders group by agent', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiResponse({
    status: 200,
    description: 'Get an array with sum of all orders grouped by agent',
    schema: {
      example: [
        {
          agentCode: 'A001',
          totalOrdAmount: '800.00',
        },
        {
          agentCode: 'A002',
          totalOrdAmount: '12700.00',
        },
      ],
    },
  })
  async totalAmoutByAgent() {
    return await this.orderService.totalAmountByAgent();
  }

  @Get('total-amount-by-country')
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Get total amount of orders group by country', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiResponse({
    status: 200,
    description: 'Get an array with sum of all orders grouped by country',
    schema: {
      example: [
        {
          custCountry: 'Australia',
          totalOrdAmount: '7700.00',
        },
        {
          custCountry: 'Canada',
          totalOrdAmount: '9500.00',
        },
      ],
    },
  })
  async totalAmoutByCountry() {
    return await this.orderService.totalAmountByCountry();
  }

  @Get('/')
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Get all orders (paginated)', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiQuery({ name: 'page', required: false })
  @ApiResponse({
    status: 200,
    description: 'Get an array with all customers',
    schema: {
      example: {
        items: [
          {
            ordNum: '200101',
            ordAmount: '3000.00',
            advanceAmount: '1000.00',
            ordDate: '2008-07-15',
            ordDescription: 'SOD',
            agentCode: {
              agentCode: 'A008',
              agentName: 'Alford',
              workingArea: 'New York',
              commission: '0.12',
              phoneNo: '044-25874365',
              country: '',
            },
            custCode: {
              custCode: 'C00001',
              custName: 'Charles',
              custCity: 'New York',
              workingArea: 'New York',
              custCountry: 'USA',
              grade: 2,
              openingAmt: '3000.00',
              receiveAmt: '500.00',
              paymentAmt: '2000.00',
              outstandingAmt: '6000.00',
              phoneNo: '077-12345674',
            },
          },
          {
            ordNum: '200102',
            ordAmount: '2000.00',
            advanceAmount: '300.00',
            ordDate: '2008-05-25',
            ordDescription: 'SOD',
            agentCode: {
              agentCode: 'A012',
              agentName: 'Lucida',
              workingArea: 'San Jose',
              commission: '0.12',
              phoneNo: '044-52981425',
              country: '',
            },
            custCode: {
              custCode: 'C00012',
              custName: 'Steven',
              custCity: 'San Jose',
              workingArea: 'San Jose',
              custCountry: 'USA',
              grade: 1,
              openingAmt: '5000.00',
              receiveAmt: '7000.00',
              paymentAmt: '9000.00',
              outstandingAmt: '3000.00',
              phoneNo: 'KRFYGJK',
            },
          },
        ],
        meta: {
          totalItems: 2,
          itemCount: 2,
          itemsPerPage: 10,
          totalPages: 1,
          currentPage: 1,
        },
        links: {
          first: 'http://localhost:3000/orders?limit=10',
          previous: '',
          next: '',
          last: 'http://localhost:3000/orders?limit=10',
        },
      },
    },
  })
  async findAll(
    @Req() req: Request,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: 1,
  ): Promise<Pagination<Order>> {
    const route = `${req.protocol}://${req.hostname}:${process.env.PORT}${req.path}`;
    return this.orderService.findAll({
      page,
      limit: salesConstants.PAGINATION_ITEMS_PER_PAGE,
      route,
    });
  }

  @Get(':ordNum')
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Get an order by ordNum', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiResponse({
    status: 200,
    description: 'Order data by ordNum',
    schema: {
      example: {
        ordNum: '200101',
        ordAmount: '3000.00',
        advanceAmount: '1000.00',
        ordDate: '2008-07-15',
        ordDescription: 'SOD',
        agentCode: {
          agentCode: 'A008',
          agentName: 'Alford',
          workingArea: 'New York',
          commission: '0.12',
          phoneNo: '044-25874365',
          country: '',
        },
        custCode: {
          custCode: 'C00001',
          custName: 'Charles',
          custCity: 'New York',
          workingArea: 'New York',
          custCountry: 'USA',
          grade: 2,
          openingAmt: '3000.00',
          receiveAmt: '500.00',
          paymentAmt: '2000.00',
          outstandingAmt: '6000.00',
          phoneNo: '077-12345674',
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Order not found',
    schema: {
      example: {
        statusCode: 404,
        message: 'Not Found',
      },
    },
  })
  async findById(@Param('ordNum') ordNum: number) {
    const data = await this.orderService.findOneById(ordNum);
    if (!data) {
      throw new NotFoundException();
    }
    return data;
  }

  @Post()
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Create a new order', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiBody({ type: CreateOrderDto })
  @ApiResponse({
    status: 201,
    description: 'Order successfully created',
    schema: {
      example: {
        ordNum: '200101',
        ordAmount: '3000',
        advanceAmount: '1000',
        ordDate: '2022-03-27',
        ordDescription: 'SOD',
        custCode: 'C00001',
        agentCode: 'A001',
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Order failed to be created due to wrong parameters format',
    schema: {
      example: {
        statusCode: 400,
        message: ['ordAmount must be a number string.'],
        error: 'Bad Request',
      },
    },
  })
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @Patch(':ordNum')
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Update an existing order', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiResponse({
    status: 200,
    description: 'Order successfully updated',
    schema: {
      example: {
        generatedMaps: [],
        raw: [],
        affected: 1,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Order failed to be updated due to wrong parameters format',
    schema: {
      example: {
        statusCode: 400,
        message: ['ordAmount must be a number string.'],
        error: 'Bad Request',
      },
    },
  })
  async update(
    @Param('ordNum') ordNum: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<UpdateResult> {
    return this.orderService.update(ordNum, updateOrderDto);
  }

  @Delete(':ordNum')
  @Auth(...ADMIN_ROLES)
  @ApiOperation({ summary: 'Delete an existing order by its ordNum', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiOperation({ summary: 'Delete an existing customer by its custCode', description:  `Required roles: ${ADMIN_ROLES}` })
  @ApiResponse({
    status: 200,
    description: 'Order successfully deleted',
    schema: {
      example: {
        generatedMaps: [],
        raw: [],
        affected: 1,
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Order was not deleted because forein key constraint',
    schema: {
      example: {
        statusCode: 500,
        message: 'Internal server error',
      },
    },
  })
  async delete(@Param('ordNum') ordNum: number): Promise<DeleteResult> {
    return this.orderService.delete(ordNum);
  }
}
