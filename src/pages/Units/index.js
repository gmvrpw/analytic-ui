import { useState } from "react";
import * as S from "./styles";
import { useCreateUnit, useUnits } from "../../store/hooks/unit";
import Header from "../../components/Header";
import Unit from "../../components/Unit";
import Modal from "../../components/Modal";
import EditingModal from "../../components/Modal/EditingModal";

const Units = () => {
  const { units, isLoading } = useUnits(1);
  const [creating, setCreating] = useState(false);
  const createContainer = useCreateUnit(1);
  const [name, setName] = useState("");
  return (
    <S.Container>
      <Header />
      <S.Page>
        <S.Title>
          <S.Name>Юниты</S.Name>
        </S.Title>
        <S.Units>
          <S.Create
            onClick={() => {
              setCreating(true);
            }}
          >
            <S.CreateIcon />
            Новый юнит
          </S.Create>
          {isLoading
            ? "loading"
            : units.map((unit) => <Unit key={unit.unitId} unit={unit} />)}
          {creating ? (
            <Modal onAbort={() => setCreating(false)}>
              <EditingModal
                title={"Создание юнита"}
                onAbort={() => {
                  setCreating(false);
                }}
                onSubmit={() => {
                  createContainer(name);
                  setCreating(false);
                }}
              >
                <S.ModalBody>
                  <S.ModalInput
                    placeholder={"Имя"}
                    defaultValue={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </S.ModalBody>
              </EditingModal>
            </Modal>
          ) : (
            false
          )}
        </S.Units>
      </S.Page>
    </S.Container>
  );
};

export default Units;
