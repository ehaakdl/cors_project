package ml.market.cors.domain.market.entity.vo;

import lombok.Data;
import java.util.List;

@Data
public class MarketApprovePageVO {
    final List<MarketApproveListVO> marketRequestList;
    final int totalPage;
}
