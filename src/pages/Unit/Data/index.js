import { useParams } from "react-router-dom";
import { useData } from "../../../store/hooks/data";
import * as S from "./styles";
import { Table, TableWrapper } from "./styles";

const Data = () => {
  const { unitId, page } = useParams();
  const { data, countOfPages, isLoading } = useData(unitId, page - 1, 20);
  let pages = [];
  for (let i = 0; i < countOfPages; i++) {
    pages.push(i);
  }
  return (
    <S.Container>
      <S.Title>
        <S.Name>Данные</S.Name>
      </S.Title>
      {isLoading ? (
        "loading"
      ) : (
        <TableWrapper>
          <Table size={data.length}>
            <S.HeaderRow>
              <S.HeaderCell>Время</S.HeaderCell>
              <S.HeaderCell>День</S.HeaderCell>
              <S.HeaderCell>ASID</S.HeaderCell>
              <S.HeaderCell>MSISDN</S.HeaderCell>
              <S.HeaderCell>Тэг</S.HeaderCell>
              <S.HeaderCell>Id</S.HeaderCell>
              <S.HeaderCell>Класс</S.HeaderCell>
              <S.HeaderCell>Ивент</S.HeaderCell>
              <S.HeaderCell>Название контейнера</S.HeaderCell>
              <S.HeaderCell>Произошло ли обогащение</S.HeaderCell>
              <S.HeaderCell>Имя</S.HeaderCell>
              <S.HeaderCell>Фамилия</S.HeaderCell>
              <S.HeaderCell>Отчество</S.HeaderCell>
            </S.HeaderRow>
            {data.map((row) => {
              const date = new Date(row.date);
              return (
                <S.Row key={row.dataId}>
                  <S.Cell>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</S.Cell>
                  <S.Cell>{`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`}</S.Cell>
                  <S.Cell>{row.asid}</S.Cell>
                  <S.Cell>{row.msisdn}</S.Cell>
                  <S.Cell>{row.element.name}</S.Cell>
                  <S.Cell>{row.element.id}</S.Cell>
                  <S.Cell>{row.element.className}</S.Cell>
                  <S.Cell>{row.event}</S.Cell>
                  <S.Cell>{row.containerName}</S.Cell>
                  <S.Cell>{row.isEnrichment ? "Да" : "Нет"}</S.Cell>
                  <S.Cell>{row.firstName}</S.Cell>
                  <S.Cell>{row.lastName}</S.Cell>
                  <S.Cell>{row.patronymic}</S.Cell>
                </S.Row>
              );
            })}
          </Table>
        </TableWrapper>
      )}
      <S.Navigation>
        {pages.map((pageIndex) => (
          <S.Page key={pageIndex} to={`../data/${pageIndex + 1}`}>
            {pageIndex + 1}
          </S.Page>
        ))}
      </S.Navigation>
    </S.Container>
  );
};

export default Data;
